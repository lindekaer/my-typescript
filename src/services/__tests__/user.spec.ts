/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import faker from 'faker'
import * as test from 'tape'
import * as userService from '../user'
import { map } from 'bluebird'

/*
-----------------------------------------------------------------------------------
|
| User service test
|
-----------------------------------------------------------------------------------
*/

const LABEL = 'UserService'

test(`${LABEL}: Create`, async t => {
  const data = {
    name: 'Theodor',
    age: 25,
    email: 'theodor.lindekaer@gmail.com',
  }
  const user = await userService.create(data)
  t.ok(user)
  t.end()
})
