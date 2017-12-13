/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as Joi from 'joi'

/*
-----------------------------------------------------------------------------------
|
| Validation middleware
|
-----------------------------------------------------------------------------------
*/

const validationOptions = {
  abortEarly: false,
  presence: 'required' as 'required',
}

export default (schema: Joi.Schema) => {
  return (req, res, next) => {
    Joi.validate(req.body, schema, validationOptions, (err, value) => {
      if (err) next(err)
      else next()
    })
  }
}
