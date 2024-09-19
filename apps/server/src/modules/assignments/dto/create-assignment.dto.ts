import { assignments, assignmentsGroups, assignmentsQuestions } from "@assignment/entities/assignment.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsNumber, IsArray, ValidateNested } from "class-validator";
import { InferInsertModel } from "drizzle-orm";

export class CreateAssignmentQuestionDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  questionId: number;
}

export class CreateAssignmentGroupDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  groupId: number;
}

export class CreateAssignmentDto implements Omit<InferInsertModel<typeof assignments>, "userId"> {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAssignmentQuestionDto)
  @IsNotEmpty()
  @ApiProperty()
  questions: CreateAssignmentQuestionDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAssignmentGroupDto)
  @IsNotEmpty()
  @ApiProperty()
  groups: CreateAssignmentGroupDto[];
}
