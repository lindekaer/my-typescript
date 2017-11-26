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
