DO $$ BEGIN
 CREATE TYPE "public"."genders" AS ENUM('Male', 'Female', 'Any', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"username" varchar,
	"password" varchar,
	"wrist_code" varchar,
	"profile_id" varchar,
	"shots" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"gender" "genders" NOT NULL,
	"bio" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
