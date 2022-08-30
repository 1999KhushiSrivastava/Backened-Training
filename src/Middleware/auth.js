const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
//Authentication
const authentication = function (req, res, next) {
  try {
    const token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];  //case sensitive
    //   if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decoded = jwt.verify(token, 'functionup-plutonium-very-very-secret-key', function (error, decoded) {
      if (error) {
        return res.status(401).send({ msg: error.message })      //unauthorised
      }
      req.token = decoded
      next()
    })// authentication
  }
  catch (error) {
    return res.status(500).send({ msg: error.message })         //server side error
  }
}
const authorisation = async function (req, res, next) {

  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId)
    if (!user) {
      return res.status(404).send({ msg: "user not found" })
    }
    let userloggedIn = req.token.userId //token id
    if (userId != userloggedIn) {
      return res.status(403).send({ msg: "authorisation failed" })
    }
    else {
      req.userId = user._id
      next()
    }
  }
  catch (error) {
    return res.status(500).send({ msg: error.message })
  }
}
module.exports.authentication = authentication
module.exports.authorisation = authorisation