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

export interface IBook {
  _id?: string
  title: string
  description: string
  author: {
    firstname: string
    lastname: string
    nationality?: string
  }
  pages: number
  isbn: string
  languages: {
    [language: string]: boolean
  }
}

/*
-----------------------------------------------------------------------------------
|
| Methods
|c
-----------------------------------------------------------------------------------
*/

export const DB_TABLE = 'book'

export const fetch = generic.fetch<IBook>(DB_TABLE)
export const fetchAll = generic.fetchAll<IBook>(DB_TABLE)
export const createAndReturn = generic.createAndReturn<IBook>(DB_TABLE)
export const updateAndReturn = generic.updateAndReturn<IBook>(DB_TABLE)
