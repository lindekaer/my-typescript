/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as Knex from 'knex'
import { Mode } from './app'

/*
-----------------------------------------------------------------------------------
|
| Setup database connection
|
-----------------------------------------------------------------------------------
*/

export const setupConnection = (mode: Mode) => {
  const knexConfig = require('../knexfile')
  return Knex(knexConfig[mode])
}

export const create = (mode: Mode) => {
  const knex = setupConnection(mode)
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex)
    .catch(err => {
      teardown(knex)
      throw err
    })
}

export const teardown = (knex: Knex) => {
  return knex.migrate.rollback().then(() => {
    knex.destroy()
  })
}
