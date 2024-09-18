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
    return this.drizzle.db.insert(users).values(createUserDto);
  }

  async findAll() {
    return this.drizzle.db.select().from(users);
  }

  async findOne(id: string) {
    return this.drizzle.db.select().from(users).where(eq(users.id, id));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.drizzle.db.update(users).set(updateUserDto).where(eq(users.id, id));
  }

  async remove(id: string) {
    return this.drizzle.db.delete(users).where(eq(users.id, id));
  }
}
