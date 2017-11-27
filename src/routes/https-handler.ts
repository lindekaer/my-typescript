export default (req, res, next) => {
  const { NODE_ENV } = req.app.locals
  if (NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(302, ['https://', req.headers.host, req.url].join(''))
    return
  }
  next()
}
