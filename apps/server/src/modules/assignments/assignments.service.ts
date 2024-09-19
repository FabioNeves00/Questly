import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { DatabaseService } from '@common/database/database.service';
import { assignments, assignmentsGroups, assignmentsQuestions } from './entities/assignment.entity';

@Injectable()
export class AssignmentsService {
  constructor(private readonly drizzle: DatabaseService) { }

  async create(createAssignmentDto: CreateAssignmentDto, userId: string) {
    const assignment = await this.drizzle.db.insert(assignments).values({ ...createAssignmentDto, userId });
    await this.drizzle.db.insert(assignmentsGroups).values(createAssignmentDto.groups.map(g => ({ assignmentId: assignment.id, groupId: g.groupId })));
    await this.drizzle.db.insert(assignmentsQuestions).values(createAssignmentDto.questions.map(q => ({ assignmentId: assignment.id, questionId: q.questionId })));
    return assignment;
  }
}
