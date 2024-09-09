import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "env";
import { EnvService } from "./env.service";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (config) => {
        return envSchema.parse(config);
      },
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
