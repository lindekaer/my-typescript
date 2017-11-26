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
  return knex(dbTable).where('_id', _id)
}

export const fetchAll = <T>(dbTable) => async (knex: Knex): Promise<T[]> => {
  return knex(dbTable)
}

export const createAndReturn = <T>(dbTable) => async (knex: Knex, entry: T): Promise<T> => {
  return knex(dbTable)
    .insert(entry, 'id')
    .returning('*')
}

export const updateAndReturn = <T>(dbTable) => async (
  knex: Knex,
  id: string,
  entry: Partial<T>,
): Promise<T> => {
  const [updatedEntry] = await knex(dbTable)
    .where({ id })
    .update(entry)
    .returning('*')
  return updatedEntry
}
