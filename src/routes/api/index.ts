/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import { Router } from 'Express'
import userRouter from './user'

/*
-----------------------------------------------------------------------------------
|
| API routes
|
-----------------------------------------------------------------------------------
*/

const router = Router()

router.use('/users', userRouter)

/*
-----------------------------------------------------------------------------------
|
| Exports
|
-----------------------------------------------------------------------------------
*/

export default router
