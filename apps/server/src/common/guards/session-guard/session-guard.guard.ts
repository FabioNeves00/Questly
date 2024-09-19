import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class SessionGuard {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean | Observable<boolean>> {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;
    const request = context.switchToHttp().getRequest();
    request.user = await this.authService.getUserFromTokenInRequest(
      request,
    );

    return !!(await this.authService.verifySessionInRequest(request))
  }
}
