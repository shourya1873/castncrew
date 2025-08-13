import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schema/index.ts",  // all schema exports
  out: "./drizzle",                    // migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL as string
  }
} satisfies Config;
