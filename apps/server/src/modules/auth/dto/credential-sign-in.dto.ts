import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength, IsString, IsOptional } from "class-validator";

export class SignInDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  @ApiProperty()
  @IsOptional()
  password: string;
}
