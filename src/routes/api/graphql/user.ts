/*
-----------------------------------------------------------------------------------
|
| Schema
|
-----------------------------------------------------------------------------------
*/

const User = `
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createUser(
      name: String
      email: String
    ): User
  }
`

const schema = User

/*
-----------------------------------------------------------------------------------
|
| Resolvers
|
-----------------------------------------------------------------------------------
*/

const resolvers = {
  Query: {
    users: () => {},
  },
  Mutation: {
    createUser: async (_, args, context) => {
      return { id: '23232', name: 'Dan', email: 'test@mail.com' }
    },
  },
}

/*
-----------------------------------------------------------------------------------
|
| Exports
|
-----------------------------------------------------------------------------------
*/

export default { schema, resolvers }
