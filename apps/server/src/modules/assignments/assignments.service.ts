import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { DatabaseService } from '@common/database/database.service';
import { assignments, assignmentsGroups, assignmentsQuestions } from './entities/assignment.entity';
import { and, eq } from 'drizzle-orm';

@Injectable()
export class AssignmentsService {
  constructor(private readonly drizzle: DatabaseService) { }

  async create(createAssignmentDto: CreateAssignmentDto, userId: string) {
    const assignment = await this.drizzle.db.insert(assignments).values({ ...createAssignmentDto, userId }).returning()[0];
    await this.drizzle.db.insert(assignmentsGroups).values(createAssignmentDto.groups.map(g => ({ assignmentId: assignment.id, groupId: g.groupId })));
    await this.drizzle.db.insert(assignmentsQuestions).values(createAssignmentDto.questions.map(q => ({ assignmentId: assignment.id, questionId: q.questionId })));
    return assignment;
  }

  async findAll() {
    return this.drizzle.db.select().from(assignments);
  }

  async findOne(id: number) {
    return this.drizzle.db.select().from(assignments).where(eq(assignments.id, id));
  }

  async delete(id: number) {
    return this.drizzle.db.delete(assignments).where(eq(assignments.id, id)).returning();
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return this.drizzle.db.update(assignments).set(updateAssignmentDto).where(eq(assignments.id, id)).returning();
  }

  async addQuestionToAssignment(id: number, questionId: number) {
    return this.drizzle.db.insert(assignmentsQuestions).values({ assignmentId: id, questionId }).returning();
  }

  async addGroupToAssignment(id: number, groupId: number) {
    return this.drizzle.db.insert(assignmentsGroups).values({ assignmentId: id, groupId }).returning();
  }

  async removeQuestionFromAssignment(id: number, questionId: number) {
    return this.drizzle.db.delete(assignmentsQuestions).where(and(eq(assignmentsQuestions.assignmentId, id), eq(assignmentsQuestions.questionId, questionId))).returning();
  }

  async removeGroupFromAssignment(id: number, groupId: number) {
    return this.drizzle.db.delete(assignmentsGroups).where(and(eq(assignmentsGroups.assignmentId, id), eq(assignmentsGroups.groupId, groupId))).returning();
  }
}
