/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as path from 'path'
import * as express from 'express'
import { Application } from 'express-serve-static-core'

/*
-----------------------------------------------------------------------------------
|
| API routes
|
-----------------------------------------------------------------------------------
*/

const register = (app: Application) => {
  const router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing'),
  })

  const assetsPath = path.join(__dirname, '../../..', 'react-app', 'build')
  const appPath = path.join(__dirname, '../../..', 'react-app', 'build', 'index.html')
  router.use(express.static(assetsPath))
  router.get('*', (req, res) => res.sendFile(appPath))

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
