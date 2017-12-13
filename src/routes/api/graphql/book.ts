/*
-----------------------------------------------------------------------------------
|
| Schema
|
-----------------------------------------------------------------------------------
*/

const Book = `
type Book {
  title: String!
  isbn: String!
}

extend type Mutation {
  createBook(
    title: String
    isbn: String
  ): Book
}
`

const schema = Book

/*
-----------------------------------------------------------------------------------
|
| Resolvers
|
-----------------------------------------------------------------------------------
*/

const resolvers = {
  User: {
    books: () => {
      return [
        {
          title: 'Dawn of the Dead',
          isbn: 1010,
        },
        {
          title: 'Alpha',
          isbn: 2020,
        },
      ]
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