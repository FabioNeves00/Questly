import { createId } from "@paralleldrive/cuid2";
import { questions } from "@question/entities/question.entity";
import { relations } from "drizzle-orm";
import { AnyPgColumn, pgTable, primaryKey, timestamp, varchar } from "drizzle-orm/pg-core";

export const groups = pgTable('groups', {
  id: varchar("id").primaryKey().$default(createId),
  name: varchar('groups_name').notNull(),
  createdAt: timestamp('groups_created_at').notNull().defaultNow(),
  updatedAt: timestamp('groups_updated_at').notNull().defaultNow(),
});

export const questionGroups = pgTable('question_groups', {
  questionId: varchar('question_id').notNull().references((): AnyPgColumn => questions.id),
  groupId: varchar('group_id').notNull().references((): AnyPgColumn => groups.id),
},
  (t) => ({
    pk: primaryKey({
      columns: [t.questionId, t.groupId],
    })
  }));

export const groupRelations = relations(groups, ({ many }) => ({
  questionGroups: many(questionGroups)
}));

export const questionGroupRelations = relations(questionGroups, ({ one }) => ({
  groups: one(groups, {
    fields: [questionGroups.groupId],
    references: [groups.id],
    relationName: "question_groups_groups",
  }),
  questions: one(questions, {
    fields: [questionGroups.questionId],
    references: [questions.id],
    relationName: "question_groups_questions",
  })
}));
