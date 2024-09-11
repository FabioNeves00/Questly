import { InputType, Int, Field } from "@nestjs/graphql";
import type { InferInsertModel } from "drizzle-orm";
import type { users } from "../entities/user.entity";

@InputType()
export class CreateUserInput implements InferInsertModel<typeof users> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  wristCode: string;

  // @Field(() => String)
  // profile: string;
}
