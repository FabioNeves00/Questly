import { IsCuid2 } from "@common/decorators/is-cuid2/is-cuid2.decorator";
import { ApiProperty } from "@nestjs/swagger";
import { questionTypes, questions } from "@question/entities/question.entity";
import { IsArray, IsIn, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { InferInsertModel } from "drizzle-orm";

export class CreateQuestionDto implements InferInsertModel<typeof questions> {
  @IsString()
  @IsCuid2()
  @ApiProperty()
  userId: string;

  @IsString()
  @IsIn(questionTypes)
  @ApiProperty()
  questionType: typeof questionTypes[number];

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0,
  })
  @Min(0)
  @IsOptional()
  @ApiProperty()
  correctAnswerIndex?: number;

  @IsString({
    each: true,
  })
  @IsArray()
  @ApiProperty()
  answers: string[];

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;
}
