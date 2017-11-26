/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as express from 'express'
import * as userService from './services/user'
import * as database from './database'
import * as Knex from 'knex'
import { Application } from 'express-serve-static-core'

/*
-----------------------------------------------------------------------------------
|
| Types
|
-----------------------------------------------------------------------------------
*/

export type Mode = 'development' | 'production' | 'testing'

/*
-----------------------------------------------------------------------------------
|
| Application
|
-----------------------------------------------------------------------------------
*/

export function start(port: number, mode: Mode) {
  const app = express()
  const knex = database.setupConnection(mode)
  configureApp(app, knex)
  app.listen(port, () => console.log(`[${mode}] App running on port ${port}`))
}

function configureApp(app: Application, knex: Knex) {
  // Do config
}
