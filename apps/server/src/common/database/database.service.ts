import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    readonly db: PostgresJsDatabase<typeof schema>) { }
}
