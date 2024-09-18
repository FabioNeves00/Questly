import { questionGroups } from "@group/entities/group.entity";
import { createId } from "@paralleldrive/cuid2";
import { users } from "@user/entities/user.entity";
import { relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const questionTypes = ["multiple-choice", "discursive", "true-or-false"] as const;

export const questionTypesEnum = pgEnum(("question_types"), questionTypes);

export const questions = pgTable("questions", {
  id: varchar("id").primaryKey().$default(createId),
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
  questionGroups: many(questionGroups)
}))
