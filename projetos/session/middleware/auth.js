function authenticateSession(req, res, next) {
    if (req.session.user) {
      next()
    } else {
      res.status(401).json({ message: 'Unauthorized' })
    }
  }
  
  function authorizeRoles(...roles) {
    return (req, res, next) => {
      if (roles.includes(req.session.user.role)) {
        next()
      } else {
        res.status(403).json({ message: 'Forbidden' })
      }
    }
  }
  
  module.exports = { authenticateSession, authorizeRoles }