import "dotenv/config";
import { createServer } from "http";
import { yoga } from "./graphql/server";

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("🚀 Server ready at http://localhost:4000/graphql");
});
