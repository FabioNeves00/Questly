import { Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env.schema';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validate: (config) => envSchema.safeParse(config),
  })],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule { }
