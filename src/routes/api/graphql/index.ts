/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { makeExecutableSchema } from 'graphql-tools'
import * as graphqlHTTP from 'express-graphql'
import UserModel from './user'
import BookModel from './book'
import { merge as _merge } from 'lodash'

/*
-----------------------------------------------------------------------------------
|
| GraphQL configuration
|
-----------------------------------------------------------------------------------
*/

const rootSchema = `
  type Query {
    _blank: Boolean
  }

  type Mutation {
    _blank: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

const models = [UserModel, BookModel]

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, ...models.map(m => m.schema)],
  resolvers: _merge({}, ...models.map(m => m.resolvers)),
})

const graphqlSetup = graphqlHTTP({
  schema,
  context: {
    id: 100,
  },
  graphiql: process.env.NODE_ENV === 'development',
  pretty: process.env.NODE_ENV === 'development',
})

/*
-----------------------------------------------------------------------------------
|
| Exports
|
-----------------------------------------------------------------------------------
*/

export default graphqlSetup
