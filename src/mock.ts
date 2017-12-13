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
  }

  return mock
}
