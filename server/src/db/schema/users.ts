import { pgTable, serial, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const userTypeEnum = pgEnum("user_type", ["ARTIST", "MAKER", "ADMIN"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  phoneNumber: text("phone_number"),
  profilePhoto: text("profile_photo"),
  password: text("password").notNull(),
  userType: userTypeEnum("user_type").default("ARTIST").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
