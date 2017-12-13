/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as test from 'tape'
import * as database from './database'

/*
-----------------------------------------------------------------------------------
|
| Utility functions
|
-----------------------------------------------------------------------------------
*/

export const handleErrors = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next)
  }
}

export const testDB = (label, fn) => {
  // Define the actual function to be run by Tape
  // Internally this calls the fn we passed
  const runTest = async t => {
    let knex = null
    let error = null
    try {
      knex = await database.create('testing')
      await fn(knex, t)
    } catch (err) {
      error = err
    } finally {
      await database.teardown(knex)
      t.end(error)
    }
  }

  test(label, runTest)
}

export const testDescription = label => {
  return function(description) {
    return `${label}: ${description}`
  }
}
