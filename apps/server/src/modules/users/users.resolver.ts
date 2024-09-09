import { Inject } from "@nestjs/common";
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CreateUserInput } from "./dto/create-user.input";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver("users")
export class UsersResolver {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => User, { name: "createUser" })
  createUser(
    @Args("createUserInput") createUserInput: CreateUserInput,
  ): string {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: "user" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
