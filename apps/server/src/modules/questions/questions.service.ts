import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { DatabaseService } from '@common/database/database.service';
import { questions } from './entities/question.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class QuestionsService {
  constructor(private readonly drizzle: DatabaseService) { }

  async create(createQuestionDto: CreateQuestionDto) {
    return await this.drizzle.db.insert(questions).values(createQuestionDto).returning();
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return await this.drizzle.db.update(questions).set(updateQuestionDto).where(eq(questions.id, id)).returning();
  }

  async findAll() {
    return await this.drizzle.db.select().from(questions);
  }

  async findOne(id: string) {
    return await this.drizzle.db.select().from(questions).where(eq(questions.id, id));
  }

  async delete(id: string) {
    return await this.drizzle.db.delete(questions).where(eq(questions.id, id)).returning();
  }
}
