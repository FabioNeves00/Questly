import { Inject, Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { DatabaseService } from "@db";
import type { CreateUserInput } from "./dto/create-user.input";
import type { UpdateUserInput } from "./dto/update-user.input";
import { users } from "./entities/user.entity";
import type { User } from "./entities/user.graphql";

@Injectable()
export class UsersService {
  constructor(
    @Inject(DatabaseService)
    private readonly drizzle: DatabaseService<typeof users>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User[]> {
    return await this.drizzle.db
      .insert(users)
      .values(createUserInput)
      .returning();
  }

  async findAll() {
    const usersfoudn = await this.drizzle.db.select().from(users);
    console.log(usersfoudn);
    return usersfoudn;
  }

  async findOne(id: string) {
    return await this.drizzle.db.select().from(users).where(eq(users.id, id));
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.drizzle.db
      .update(users)
      .set(updateUserInput)
      .where(eq(users.id, id));
  }

  remove(id: string) {
    return this.drizzle.db.delete(users).where(eq(users.id, id));
  }
}
