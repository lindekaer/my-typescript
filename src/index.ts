/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as app from './app'
import * as dotenv from 'dotenv'

/*
-----------------------------------------------------------------------------------
|
| Start application
|
-----------------------------------------------------------------------------------
*/

const PORT = parseInt(process.env.PORT) || 9000
const MODE = process.env.NODE_ENV

if (!MODE) throw new Error('Please specify MODE as environment variable')

if (MODE === 'development') {
  dotenv.load()
}

app.create(PORT, MODE as app.Mode)
