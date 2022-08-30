const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
//Authentication
const authentication =  function(req,res,next){
const token = req.headers["x-Auth-token"]||req.headers["x-auth-token"];  //case sensitive
//   if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });
  try{
    let decoded= jwt.verify(token,'functionup-plutonium-very-very-secret-key')// authentication
    req.token= decoded
  }catch(error){
    // console.log(error)
    return res.send({msg:error.message})
  }
  
  next()
}
const authorisation = async function(req,res,next){
let userId = req.params.userId;
let user = await userModel.findById(userId)
if(!user){
 return res.send({msg:"user does not exists"})
}
let userloggedIn = req.token.userId //token id
if(userId != userloggedIn){
  return res.send({msg:"authorisation failed"})
}
else{
  req.userId=user._id
  next()
}
}
  module.exports.authentication=authentication
  module.exports.authorisation=authorisation