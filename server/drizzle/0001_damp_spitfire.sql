CREATE TYPE "public"."user_type" AS ENUM('ARTIST', 'MAKER', 'ADMIN');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "profile_photo" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "user_type" "user_type" DEFAULT 'ARTIST' NOT NULL;