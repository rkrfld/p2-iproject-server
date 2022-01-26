const { User } = require("../models/index")
const { verifyToken } = require("../helpers/jwtoken")

const authenMiddleware = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token;

    if (!access_token) {
      throw({ name: "invalidToken" })
    } else {
      const payload = verifyToken(access_token)
      const user = await User.findByPk(payload.id)
      req.currentUser = { id: user.id, email: user.email }
      if (!user) {
        throw({ name: 'invalidToken' })
      } else {
        next()
      }
    }


  } catch (err) {
    next(err)
  }
}

module.exports = authenMiddleware