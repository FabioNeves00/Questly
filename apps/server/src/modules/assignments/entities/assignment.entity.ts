import { groups } from "@group/entities/group.entity";
import { questions } from "@question/entities/question.entity";
import { users } from "@user/entities/user.entity";
import { relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgTable, primaryKey, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const assignments = pgTable('assignments', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id').notNull().references((): AnyPgColumn => users.id),
  name: varchar('name').notNull(),
  description: varchar('description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const assignmentsQuestions = pgTable('assignments_questions', {
  assignmentId: integer('assignment_id').notNull().references((): AnyPgColumn => assignments.id),
  questionId: integer('question_id').notNull().references((): AnyPgColumn => questions.id),
},
  (t) => ({
    pk: primaryKey({
      columns: [t.assignmentId, t.questionId],
    })
  }));

export const assignmentsGroups = pgTable('assignments_groups', {
  assignmentId: integer('assignment_id').notNull().references((): AnyPgColumn => assignments.id),
  groupId: integer('group_id').notNull().references((): AnyPgColumn => groups.id),
},
  (t) => ({
    pk: primaryKey({
      columns: [t.assignmentId, t.groupId],
    })
  }));

export const assignmentsRelations = relations(assignments, ({ many, one }) => ({
  questions: many(assignmentsQuestions, {
    relationName: "assignments_questions",
  }),
  groups: many(assignmentsGroups, {
    relationName: "assignments_groups",
  }),
  users: one(users, {
    fields: [assignments.userId],
    references: [users.id],
    relationName: "assignments_users",
  })
}));

export const assignmentGroupRelations = relations(assignmentsGroups, ({ one }) => ({
  groups: one(groups, {
    fields: [assignmentsGroups.groupId],
    references: [groups.id],
  }),
  assignments: one(assignments, {
    fields: [assignmentsGroups.assignmentId],
    references: [assignments.id],
  }),
}));

export const assignmentQuestionRelations = relations(assignmentsQuestions, ({ one }) => ({
  questions: one(questions, {
    fields: [assignmentsQuestions.questionId],
    references: [questions.id],
  }),
  assignments: one(assignments, {
    fields: [assignmentsQuestions.assignmentId],
    references: [assignments.id],
  }),
}));
