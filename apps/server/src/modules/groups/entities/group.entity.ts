import { assignmentsGroups } from "@assignment/entities/assignment.entity";
import { questions } from "@question/entities/question.entity";
import { users } from "@user/entities/user.entity";
import { relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgTable, primaryKey, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const groups = pgTable('groups', {
  id: serial("id").primaryKey(),
  name: varchar('name').notNull(),
  userId: varchar('user_id').notNull().references((): AnyPgColumn => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const questionGroups = pgTable('question_groups', {
  questionId: integer('question_id').notNull().references((): AnyPgColumn => questions.id),
  groupId: integer('group_id').notNull().references((): AnyPgColumn => groups.id),
},
  (t) => ({
    pk: primaryKey({
      columns: [t.questionId, t.groupId],
    })
  }));

export const groupRelations = relations(groups, ({ many, one }) => ({
  questionGroups: many(questionGroups),
  assignmentsGroups: many(assignmentsGroups),
  user: one(users, {
    fields: [groups.userId],
    references: [users.id],
  }),
}));

export const questionGroupRelations = relations(questionGroups, ({ one }) => ({
  groups: one(groups, {
    fields: [questionGroups.groupId],
    references: [groups.id],
  }),
  questions: one(questions, {
    fields: [questionGroups.questionId],
    references: [questions.id],
  })
}));
