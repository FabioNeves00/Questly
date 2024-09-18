import { Inject, Injectable } from "@nestjs/common";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DATABASE_PROVIDER } from "./database.module";

@Injectable()
export class DatabaseService<T extends NonNullable<unknown>> {
  constructor(
    @Inject(DATABASE_PROVIDER)
    readonly db: PostgresJsDatabase<T>,
  ) {}
}
