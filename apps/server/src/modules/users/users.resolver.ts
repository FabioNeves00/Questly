import { Inject } from "@nestjs/common";
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.graphql";
import { UsersService } from "./users.service";

@Resolver("users")
export class UsersResolver {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => [User], { name: "createUser" })
  async createUser(
    @Args("createUserInput") createUserInput: CreateUserInput,
  ): Promise<User[]> {
    console.log(createUserInput);
    const users = await this.usersService.create(createUserInput);
    console.log(users);
    return users;
  }

  @Query(() => [User], { name: "users" })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => [User], { name: "user" })
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
