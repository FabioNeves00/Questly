import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { GroupsModule } from './modules/groups/groups.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { EnvModule } from './common/env/env.module';

@Module({
  imports: [UsersModule, QuestionsModule, GroupsModule, AssignmentsModule, AuthModule, DatabaseModule, EnvModule],
})
export class AppModule { }
