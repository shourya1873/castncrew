import { db } from "../../../db/drizzle";
import { users } from "../../../db/schema/users";
import type { InferInsertModel } from "drizzle-orm";
import bcryptjs from 'bcryptjs';

type NewUser = InferInsertModel<typeof users>; 

export const userResolvers = {
  Query: {
    users: async () => {
      return await db.select().from(users);
    },
  },
  Mutation: {
    createUser: async (_: any, args: Omit<NewUser, "id" | "createdAt">) => {
      const hashedPassword = await bcryptjs.hash(args.password, 8);
      args.password = hashedPassword;
      const inserted = await db.insert(users).values(args).returning();
      return inserted[0];
    }
  },
};
