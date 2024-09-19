import { ApiProperty } from "@nestjs/swagger";
import { accountTypes, users } from "@user/entities/user.entity";
import { IsEmail, IsIn, IsOptional, IsString } from "class-validator";
import { InferInsertModel } from "drizzle-orm";

export class CreateUserDto implements InferInsertModel<typeof users> {
  @IsEmail()
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  avatar: string;

}
