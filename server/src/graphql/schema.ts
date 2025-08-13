import { userTypeDefs } from "./modules/user/user.schema";
import { userResolvers } from "./modules/user/user.resolver";

// Add other module imports here as you grow
// import { orderTypeDefs } from "./modules/order/order.schema";
// import { orderResolvers } from "./modules/order/order.resolver";

export const typeDefs = [
  userTypeDefs,
  // orderTypeDefs,
];

export const resolvers = [
  userResolvers,
  // orderResolvers,
];
