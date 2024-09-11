import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { IEnv } from "env";

@Injectable()
export class EnvService {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {}

  get<T>(key: keyof IEnv): T {
    return this.configService.getOrThrow<T>(key);
  }
}
