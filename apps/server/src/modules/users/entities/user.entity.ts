import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  type AnyPgColumn,
  integer,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";
import { profiles } from "@profiles/entities/profile.entity";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().$default(createId),
  name: varchar("name"),
  username: varchar("username"),
  password: varchar("password"),
  wristCode: varchar("wrist_code"),
  profile_id: varchar("profile_id").references((): AnyPgColumn => profiles.id), // ref profiles
  shots: integer("shots").default(0),
});

export const usersRelations = relations(users, ({ one }) => ({
  profileInfo: one(profiles),
}));
