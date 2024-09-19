import { Global, Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env.schema';

@Global()
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validate: (config) => {
      return envSchema.parse(config);
    },
  })],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule { }
