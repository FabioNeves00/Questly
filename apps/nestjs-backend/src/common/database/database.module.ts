import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { EnvService } from '@common/env/env.service';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import { EnvModule } from '@common/env/env.module';

@Module({
  imports: [EnvModule],
  providers: [DatabaseService, {
    provide: 'DATABASE_CONNECTION',
    inject: [EnvService],
    useFactory: async (envService: EnvService) => {
      const conn = postgres({
        database: envService.get('DATABASE_NAME'),
        user: envService.get('DATABASE_USER'),
        password: envService.get('DATABASE_PASSWORD'),
        host: envService.get('DATABASE_HOST'),
        port: envService.get('DATABASE_PORT'),
        ssl: true,
      });

      return drizzle(conn, { schema })
    },
  }],
  exports: [DatabaseService],
})
export class DatabaseModule { }
