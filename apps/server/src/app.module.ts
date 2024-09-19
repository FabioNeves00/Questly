import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { GroupsModule } from './modules/groups/groups.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { AuthModule } from './modules/auth/auth.module';
import { EnvModule } from './common/env/env.module';
import { APP_GUARD } from '@nestjs/core';
import { SessionGuard } from '@common/guards/session-guard/session-guard.guard';

@Module({
  imports: [UsersModule, QuestionsModule, GroupsModule, AssignmentsModule, AuthModule, EnvModule],
  providers: [{
    provide: APP_GUARD,
    useClass: SessionGuard,
  }]
})
export class AppModule { }
