import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/credential-sign-in.dto';
import { SignUpDto } from './dto/credential-sign-up.dto';
import { FastifyRequestWithCookie } from '@common/types/fastify-with-cookie';
import { FastifyReply } from 'fastify';
import { DEFAULT_COOKIE_NAME } from '@common/constants';
import { Public } from '@common/decorators/is-public/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  //sign in
  @Public()
  @Post('/local/sign-in')
  async signInWithEmail(@Body() body: SignInDto, @Res({ passthrough: true }) res: FastifyReply) {
    const { user, token } = await this.authService.signIn(body.email, body.password);

    res.setCookie(DEFAULT_COOKIE_NAME, token, { httpOnly: true, secure: true, signed: true, domain: 'localhost', path: '/' });

    return res.send(user);
  }

  @Public()
  @Post('/local/sign-up')
  async signUpWithEmail(@Body() body: SignUpDto, @Res({ passthrough: true }) res: FastifyReply) {
    const { user, token } = await this.authService.signUp(body);

    res.setCookie(DEFAULT_COOKIE_NAME, token, { httpOnly: true, secure: true, signed: true, domain: 'localhost', path: '/' });

    return res.send(user);
  }

  // @Post('/local/sign-out')
  // async signOut() {
  //   return this.authService.signOut();
  // }
  //
  @Get('/local/session')
  async getSession(@Req() req: FastifyRequestWithCookie) {
    return await this.authService.getUserFromTokenInRequest(req);
  }
}
