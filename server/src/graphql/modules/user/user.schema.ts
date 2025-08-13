export const userTypeDefs = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
    phoneNumber: String
    profilePhoto: String
    userType: UserType
    createdAt: String!
  }

  enum UserType {
    ADMIN
    MAKER
    ARTIST
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, phoneNumber: String, profilePhoto: String, userType: UserType, password: String): User!
  }
`;
