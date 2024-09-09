import { type DynamicModule, Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/postgres-js";
import * as postgres from "postgres";
import { EnvService } from "@env";
import { DatabaseService } from "./database.service";

export const DATABASE_PROVIDER = "DRIZZLE_ORM_PROVIDER";

@Module({})
export class DatabaseModule {
  static forRoot(schema: NonNullable<unknown>): DynamicModule {
    return {
      module: DatabaseModule,
      global: true,
      exports: [DatabaseService],
      providers: [
        DatabaseService,
        {
          provide: DATABASE_PROVIDER,
          inject: [EnvService],
          useFactory: (envService: EnvService) => {
            const connection = postgres({
              host: envService.get<string>("DATABASE_HOST"),
              port: envService.get<number>("DATABASE_PORT"),
              user: envService.get<string>("DATABASE_USER"),
              password: envService.get<string>("DATABASE_PASSWORD"),
              database: envService.get<string>("DATABASE_NAME"),
            });
            return drizzle(connection, { schema });
          },
        },
      ],
    };
  }
}
