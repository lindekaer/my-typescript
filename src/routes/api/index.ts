/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { Router } from 'Express'
import userRouter from './user'
import graphqlRouter from './graphql'
import { Application } from 'express-serve-static-core'

/*
-----------------------------------------------------------------------------------
|
| API routes
|
-----------------------------------------------------------------------------------
*/

const register = (app: Application) => {
  const router = Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing'),
  })
  router.use('/users', userRouter)
  router.use('/graphql', graphqlRouter)
  return router
}

/*
-----------------------------------------------------------------------------------
|
| Exports
|
-----------------------------------------------------------------------------------
*/

export default register
