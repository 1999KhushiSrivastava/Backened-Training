const jwt = require('jsonwebtoken')
let validating = async function(req,res,next){
let token = req.headers["x-Auth-token"]||req.headers["x-auth-token"];  //case sensitive
//   if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });
  try{
    let decoded = jwt.verify(token,'functionup-plutonium-very-very-secret-key')
  }catch(error){
    // console.log(error)
    return res.send({msg:error.message})
  }
  
  next()
}

  module.exports.validating=validating