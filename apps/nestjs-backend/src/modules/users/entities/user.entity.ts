import { createId } from "@paralleldrive/cuid2";
import { questions } from "@question/entities/question.entity";
import { relations } from "drizzle-orm";
import { pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const accountTypes = pgEnum("account_types", ["github", "google", "native"])

export const users = pgTable("users", {
  id: varchar("id").primaryKey().$default(createId),
  email: varchar("email").notNull(),
  password: varchar("password"),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  avatar: varchar("avatar"),
  accountType: accountTypes("account_type").default('native').notNull()
});

export const userRelations = relations(users, ({ many }) => ({
  questions: many(questions, {
    relationName: "questions_users",
  })
}))
