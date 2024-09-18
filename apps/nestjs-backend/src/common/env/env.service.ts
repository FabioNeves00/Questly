import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEnv } from './env.schema';

@Injectable()
export class EnvService {
  constructor(
    private readonly configService: ConfigService,
  ) { }

  get<T>(key: keyof IEnv): T {
    return this.configService.get<T>(key);
  }
}
