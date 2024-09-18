import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DatabaseService } from '@common/database/database.service';
import { groups, questionGroups } from './entities/group.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class GroupsService {
  constructor(
    private readonly drizzle: DatabaseService
  ) { }

  async create(createGroupDto: CreateGroupDto) {
    return this.drizzle.db.insert(groups).values(createGroupDto).returning();
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    return this.drizzle.db.update(groups).set(updateGroupDto).where(eq(groups.id, id)).returning();
  }

  async findAll() {
    return this.drizzle.db.select().from(groups);
  }

  async findOne(id: string) {
    return this.drizzle.db.select().from(groups).where(eq(groups.id, id));
  }

  async delete(id: string) {
    return this.drizzle.db.delete(groups).where(eq(groups.id, id)).returning();
  }

  async addQuestionToGroup(id: string, questionId: string) {
    return this.drizzle.db.insert(questionGroups).values({ groupId: id, questionId }).returning();
  }
}
