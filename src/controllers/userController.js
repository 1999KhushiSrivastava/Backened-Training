const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const testMiddleWare = function(req,res){
    console.log("Middlewaretested")
     res.send("testing done")
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.testMiddleWare=testMiddleWare