import { assignments } from "@assignment/entities/assignment.entity";
import { groups } from "@group/entities/group.entity";
import { createId } from "@paralleldrive/cuid2";
import { questions } from "@question/entities/question.entity";
import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().$default(createId),
  email: varchar("email").notNull(),
  password: varchar("password"),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  avatar: varchar("avatar"),
});

export const userRelations = relations(users, ({ many }) => ({
  questions: many(questions, {
    relationName: "questions_users",
  }),
  assignments: many(assignments, {
    relationName: "assignments_users",
  }),
  groups: many(groups, {
    relationName: "groups_users",
  }),
}))
