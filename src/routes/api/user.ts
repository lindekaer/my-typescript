/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { Router } from 'express'
import { handleErrors } from '../../utils'
import * as userService from '../../services/user'

/*
-----------------------------------------------------------------------------------
|
| User routes
|
-----------------------------------------------------------------------------------
*/

const router = Router()

router.post(
  '/',
  handleErrors(async (req, res) => {
    const { knex } = req.app.locals
    const { name, age, email } = req.body
    const user = await userService.createAndReturn(knex, { name, age, email })
    res.json(user)
  }),
)

/*
-----------------------------------------------------------------------------------
|
| Exports
|
-----------------------------------------------------------------------------------
*/

export default router
