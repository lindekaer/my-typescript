/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import * as server from './server'
import * as dotenv from 'dotenv'

/*
-----------------------------------------------------------------------------------
|
| Start application
|
-----------------------------------------------------------------------------------
*/

const PORT = parseInt(process.env.PORT) || 9000
const MODE = process.env.NODE_ENV || 'development'

if (MODE === 'development') {
  dotenv.load()
}

server.start(PORT, MODE)
