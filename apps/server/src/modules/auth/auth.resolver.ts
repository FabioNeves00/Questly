import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CreateAuthInput } from "./dto/create-auth.input";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { UpdateAuthInput } from "./dto/update-auth.input";
import { Auth } from "./entities/auth.entity";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  createAuth(@Args("createAuthInput") createAuthInput: CreateAuthInput) {
    return this.authService.create(createAuthInput);
  }

  @Query(() => [Auth], { name: "auth" })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => Auth, { name: "auth" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => Auth)
  updateAuth(@Args("updateAuthInput") updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth)
  removeAuth(@Args("id", { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
