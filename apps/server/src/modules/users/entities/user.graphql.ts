import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => Int, { nullable: true })
  shots: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  wristCode: string;
}
