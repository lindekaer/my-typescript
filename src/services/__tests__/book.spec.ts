/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { testDB, testDescription } from '../../utils'
import * as bookService from '../book'
import { mockDB } from '../../mock'
import * as faker from 'faker'

/*
-----------------------------------------------------------------------------------
|
| Book service test
|
-----------------------------------------------------------------------------------
*/

const desc = testDescription('BookService')

testDB(desc('Create'), async (knex, t) => {
  const bookData = {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    author: {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      nationality: faker.address.countryCode(),
    },
    pages: faker.random.number(),
    isbn: faker.random.uuid(),
    languages: {
      [faker.random.locale()]: true,
      [faker.random.locale()]: true,
      [faker.random.locale()]: true,
    },
  }
  const book = await bookService.createAndReturn(knex, bookData)
  t.ok(book)
  t.ok(book._id)
})

testDB(desc('Fetch'), async (knex, t) => {
  const mock = mockDB(knex)
  const book = await mock.newBook()
  const fetchedBook = await bookService.fetch(knex, book._id)
  t.ok(fetchedBook)
  t.equal(fetchedBook._id, book._id)
})

testDB(desc('Fetch all'), async (knex, t) => {
  const mock = mockDB(knex)
  await mock.newBook()
  await mock.newBook()
  await mock.newBook()

  const fetchedBooks = await bookService.fetchAll(knex)
  t.ok(fetchedBooks)
  t.equal(fetchedBooks.length, 3)
})

testDB(desc('Update'), async (knex, t) => {
  const mock = mockDB(knex)
  const book = await mock.newBook()

  let modifiedBook
  const newTitle = 'Special Adventure 101'
  const newAuthorFirstname = 'Mikey'
  const newPages = 906

  modifiedBook = await bookService.updateAndReturn(knex, book._id, {
    title: newTitle,
  })
  t.notEqual(modifiedBook.title, book.title)

  modifiedBook = await bookService.updateAndReturn(knex, book._id, {
    author: {
      firstname: newAuthorFirstname,
    } as any,
  })
  t.notEqual(modifiedBook.author.firstname, book.author.firstname)

  modifiedBook = await bookService.updateAndReturn(knex, book._id, {
    pages: newPages,
  })
  t.notEqual(modifiedBook.pages, book.pages)
})
