import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  preferences: "Male" | "Female" | "Any" | "other";

  @Field(() => String)
  bio: string;
}
