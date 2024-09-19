import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from '@common/database/database.service';
import { users } from './entities/user.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(
    private readonly drizzle: DatabaseService
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.drizzle.db.insert(users).values(createUserDto).returning({
      id: users.id,
      email: users.email,
      avatar: users.avatar,
      firstName: users.firstName,
      lastName: users.lastName,
    });
  }

  async findAll() {
    return await this.drizzle.db.select().from(users);
  }

  async findOne(id: string) {
    return await this.drizzle.db.select().from(users).where(eq(users.id, id));
  }

  async findOneByEmail(email: string) {
    return await this.drizzle.db.select().from(users).where(eq(users.email, email));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.drizzle.db.update(users).set(updateUserDto).where(eq(users.id, id)).returning();
  }

  async remove(id: string) {
    return await this.drizzle.db.delete(users).where(eq(users.id, id)).returning();
  }
}
