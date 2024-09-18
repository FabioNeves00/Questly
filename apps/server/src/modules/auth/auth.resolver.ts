import { Inject } from "@nestjs/common";
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { User } from "@users/entities/user.graphql";
import { AuthService } from "./auth.service";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CreateAuthInput } from "./dto/create-auth.input";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UpdateAuthInput } from "./dto/update-auth.input";

@Resolver(() => User)
export class AuthResolver {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => User)
  createAuth(@Args("createAuthInput") createAuthInput: CreateAuthInput) {
    return this.authService.create(createAuthInput);
  }

  @Query(() => [User], { name: "auth" })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => User, { name: "auth" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => User)
  updateAuth(@Args("updateAuthInput") updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => User)
  removeAuth(@Args("id", { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
