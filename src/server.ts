/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as express from 'express'
import * as userService from './services/user'

/*
-----------------------------------------------------------------------------------
|
| Application
|
-----------------------------------------------------------------------------------
*/

export function start(port: number, mode: string) {
  const app = express()
  app.post('/user', async (req, res) => {
    const user = await userService.create(req.body)
    res.json(user)
  })
  app.listen(port, () => console.log(`[${mode}] App running on port ${port}`))
}
