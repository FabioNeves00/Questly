import { join } from "path";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DatabaseModule } from "@db";
import { EnvModule } from "@env";
import { AuthModule } from "./modules/auth/auth.module";
import { ProfilesModule } from "./modules/profiles/profiles.module";
import { UsersModule } from "./modules/users/users.module";
import * as dbSchema from "./schema";

@Module({
  imports: [
    DatabaseModule.forRoot({ schema: dbSchema }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        playground: true,
        autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      }),
    }),
    EnvModule,
    AuthModule,
    UsersModule,
    ProfilesModule,
  ],
})
export class AppModule {}
