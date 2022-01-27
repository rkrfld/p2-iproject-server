const jwt = require('jsonwebtoken')
// const key = process.env.SECRET_KEY
const key = 'anotherbitofdust'
const signToken = (payload) => {
  console.log(key);
  return jwt.sign(payload, key)
};
const verifyToken = (token) => {
  console.log(key);
  return jwt.verify(token, key)
};

module.exports = {
  signToken,
  verifyToken
}