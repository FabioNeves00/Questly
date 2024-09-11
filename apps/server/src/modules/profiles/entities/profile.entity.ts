import { createId } from "@paralleldrive/cuid2";
import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { users } from "@users/entities/user.entity";

export const genders = pgEnum("genders", [
  "Male",
  "Female",
  "Any",
  "other",
] as const);

export const profiles = pgTable("profiles", {
  id: varchar("id").primaryKey().$default(createId),
  userId: varchar("user_id").references(() => users.id),
  gender: genders("gender").notNull(),
  bio: text("bio"),
});

export const profileInfoRelations = relations(profiles, ({ one }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
}));
