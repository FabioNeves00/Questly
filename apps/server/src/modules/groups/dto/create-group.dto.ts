import { groups } from "@group/entities/group.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { InferInsertModel } from "drizzle-orm";

export class CreateGroupDto implements InferInsertModel<typeof groups> {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
