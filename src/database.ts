/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as Knex from 'knex'
import { Mode } from './server'

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
