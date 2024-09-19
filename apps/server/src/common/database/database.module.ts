import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { EnvService } from '@common/env/env.service';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

@Module({
  providers: [DatabaseService, {
    provide: 'DATABASE_CONNECTION',
    inject: [EnvService],
    useFactory: async (envService: EnvService) => {
      try {
        console.log("envService", {
          DATABASE_NAME: envService.get('DATABASE_NAME'),
          DATABASE_USER: envService.get('DATABASE_USER'),
          DATABASE_PASSWORD: envService.get('DATABASE_PASSWORD'),
          DATABASE_HOST: envService.get('DATABASE_HOST'),
          DATABASE_PORT: envService.get('DATABASE_PORT'),
        })
        const conn = postgres({
          database: envService.get('DATABASE_NAME'),
          user: envService.get('DATABASE_USER'),
          password: envService.get('DATABASE_PASSWORD'),
          host: envService.get('DATABASE_HOST'),
          port: envService.get('DATABASE_PORT'),
          // ssl: true,
        });
        console.log("conn", conn)
        return drizzle(conn, { schema })
      } catch (error) {
        console.log(error);
      }
    },
  }],
  exports: [DatabaseService],
})
export class DatabaseModule { }
