/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { testDB, testDescription } from '../../utils'
import * as userService from '../user'
import { mockDB } from '../../mock'
import * as faker from 'faker'

/*
-----------------------------------------------------------------------------------
|
| User service test
|
-----------------------------------------------------------------------------------
*/

const desc = testDescription('UserService')

testDB(desc('Create'), async (knex, t) => {
  const userData = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
  }
  const user = await userService.createAndReturn(knex, userData)
  t.ok(user)
  t.ok(user._id)
})

testDB(desc('Fetch'), async (knex, t) => {
  const mock = mockDB(knex)
  const user = await mock.newUser()
  const fetchedUser = await userService.fetch(knex, user._id)
  t.ok(fetchedUser)
  t.equal(fetchedUser._id, user._id)
})

testDB(desc('Fetch all'), async (knex, t) => {
  const mock = mockDB(knex)
  await mock.newUser()
  await mock.newUser()
  await mock.newUser()

  const fetchedUsers = await userService.fetchAll(knex)
  t.ok(fetchedUsers)
  t.equal(fetchedUsers.length, 3)
})

testDB(desc('Update'), async (knex, t) => {
  const mock = mockDB(knex)
  const user = await mock.newUser()

  let modifiedUser
  const newUsername = 'NewNameForeSure200'
  const newEmail = 'random@email.com'
  const newPassword = '9wa8cjwaj29c2'

  modifiedUser = await userService.updateAndReturn(knex, user._id, {
    username: newUsername,
  })
  t.notEqual(modifiedUser.username, user.username)

  modifiedUser = await userService.updateAndReturn(knex, user._id, {
    email: newEmail,
  })
  t.notEqual(modifiedUser.email, user.email)

  modifiedUser = await userService.updateAndReturn(knex, user._id, {
    password: newPassword,
  })
  t.notEqual(modifiedUser.password, user.password)
})
