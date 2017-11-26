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
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as helmet from 'helmet'
import * as cors from 'cors'
import { Application } from 'express-serve-static-core'
import * as subdomain from 'express-subdomain'
import apiRouter from './routes/api'
import dashboardRouter from './routes/dashboard'

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
  configureApp(knex, app, mode)
  app.listen(port, () => console.log(`[${mode}] App running on port ${port}`))
}

function configureApp(knex: Knex, app: Application, mode: Mode) {
  // Set options on Express app
  app.set('title', 'My Typescript')
  app.set('x-powered-by', null)
  app.set('env', mode)
  app.set('strict routing', true)
  app.set('case sensitive routing', true)
  app.set('json spaces', 2)

  // Register middlewares
  app.use(bodyParser.json())
  app.use(compression())
  app.use(helmet())
  app.use(cors())

  // Set variables on app
  app.locals.knex = knex
  app.locals.NODE_ENV = mode

  // Register routes
  app.use(subdomain('api', apiRouter))
  app.use(subdomain('dashboard', dashboardRouter))
  app.use((req, res) => res.sendStatus(404))
}
