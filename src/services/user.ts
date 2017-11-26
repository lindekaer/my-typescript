/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as generic from './generic'

/*
-----------------------------------------------------------------------------------
|
| Interface
|
-----------------------------------------------------------------------------------
*/

export interface IUser {
  name: string
  age: number
  email: string
  interests?: string[]
  meta?: {
    [key: string]: any
  }
}

/*
-----------------------------------------------------------------------------------
|
| Methods
|
-----------------------------------------------------------------------------------
*/

const DB_TABLE = 'user'

export const fetch = generic.fetch<IUser>(DB_TABLE)
export const fetchAll = generic.fetchAll<IUser>(DB_TABLE)
export const createAndReturn = generic.createAndReturn<IUser>(DB_TABLE)
export const updateAndReturn = generic.updateAndReturn<IUser>(DB_TABLE)
