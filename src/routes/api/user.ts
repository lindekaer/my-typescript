/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as Joi from 'joi'
import { Router } from 'express'
import { handleErrors } from '../../utils'
import * as userService from '../../services/user'
import validate from '../../middlewares/validate'

/*
-----------------------------------------------------------------------------------
|
| Schema
|
-----------------------------------------------------------------------------------
*/

/* prettier-ignore */
const schemas = {
  create: Joi.object().keys({
    name: Joi.string().min(1).max(30),
    email: Joi.string().email(),
    age: Joi.number().integer().min(1).max(100),
  }),
}

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
  validate(schemas.create),
  handleErrors(async (req, res) => {
    const { knex } = req.app.locals
    const { username, password, email } = req.body
    const user = await userService.createAndReturn(knex, { username, password, email })
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
