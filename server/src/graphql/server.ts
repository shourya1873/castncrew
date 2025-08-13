import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs, resolvers } from "./schema";

export const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});
