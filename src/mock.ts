/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { merge as _merge } from 'lodash'
import * as faker from 'faker'
import * as userService from './services/user'
import * as bookService from './services/book'

/*
-----------------------------------------------------------------------------------
|
| Data mocking module
|
-----------------------------------------------------------------------------------
*/

export const mockDB = knex => {
  const closeout = async <T>(service, data: Partial<T>, overrides: Partial<T>): Promise<T> => {
    const [ret] = await knex(service.DB_TABLE)
      .insert(_merge({}, data, overrides))
      .returning('*')
    return ret
  }

  const mock = {
    newUser(overrides = {}) {
      return closeout<userService.IUser>(
        userService,
        {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
        },
        overrides,
      )
    },

    newBook(overrides = {}) {
      return closeout<bookService.IBook>(
        bookService,
        {
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
        },
        overrides,
      )
    },
  }

  return mock
}
