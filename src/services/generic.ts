/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as Knex from 'knex'

/*
-----------------------------------------------------------------------------------
|
| Generic service methods
|
-----------------------------------------------------------------------------------
*/

export const fetch = <T>(dbTable) => async (knex: Knex, _id: string): Promise<T> => {
  const [entry] = await knex(dbTable).where('_id', _id)
  return entry
}

export const fetchAll = <T>(dbTable) => async (knex: Knex): Promise<T[]> => {
  return knex(dbTable)
}

export const createAndReturn = <T>(dbTable) => async (knex: Knex, entry: T): Promise<T> => {
  const [dbEntry] = await knex(dbTable)
    .insert(entry)
    .returning('*')
  return dbEntry
}

export const updateAndReturn = <T>(dbTable) => async (
  knex: Knex,
  _id: string,
  entry: Partial<T>,
): Promise<T> => {
  const [updatedEntry] = await knex(dbTable)
    .where({ _id })
    .update(entry)
    .returning('*')
  return updatedEntry
}
