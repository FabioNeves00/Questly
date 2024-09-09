import { join } from "path";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DatabaseModule } from "@db";
import { EnvModule } from "@env";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    EnvModule,
    DatabaseModule.forRoot({}),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
