import { assignmentsQuestions } from "@assignment/entities/assignment.entity";
import { questionGroups } from "@group/entities/group.entity";
import { users } from "@user/entities/user.entity";
import { relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const questionTypes = ["multiple_choice", "discursive", "true_or_false"] as const;

export const questionTypesEnum = pgEnum(("question_types"), questionTypes);

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references((): AnyPgColumn => users.id),
  questionType: questionTypesEnum("question_type").notNull(),
  correctAnswerIndex: integer("correct_answer_index"),
  answers: varchar("answers").array().notNull(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const questionRelations = relations(questions, ({ one, many }) => ({
  users: one(users, {
    fields: [questions.userId],
    references: [users.id],
    relationName: "questions_users",
  }),
  questionGroups: many(questionGroups),
  assignmentsQuestions: many(assignmentsQuestions),
}))
