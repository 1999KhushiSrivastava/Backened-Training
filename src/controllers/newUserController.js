//const UserModel= require("../models/userModel")

const productModel = require("../models/productModel")
const UserModel = require("../models/newUserModel")
const orderModel = require("../models/orderModel")

const product = async function(req,res){
    let data = req.body
    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}
module.exports.product=product
const newUser = async function(req,res){
    let data = req.body
    let savedData= await UserModel.create(data)
    res.send({msg:savedData})
}
module.exports.newUser=newUser
// ---------------------------3-----------------------------------------//
const order = async function(req,res){
    let data = req.body
    const {userId,productId} = data   //destructuring
    const userData = await UserModel.findById(userId)
    if(!userData){
        return res.send({msg:"user doest not exists in this id"})
    }  
    const productData = await productModel.findById(productId) 
    if(!productData){
        return res.send({msg:"product does not exists in this id"})
    }
    data.isFreeAppUser=req.isFreeAppUser
    if(data.isFreeAppUser==true){
        data.amount=0
    }
    else{
        data.amount=productData.price
        if(userData.balance < productData.price){
            return res.send({msg:"user does not have sufficient balance"})
        }
        let amount = productData.price
        let user = await UserModel.findOneAndUpdate({_id:userId},{$inc: {balance:-amount}},{new:true})
        console.log(user)
    }
    let date = new Date()
    data.date= date.toLocaleDateString()
     let savedData= await orderModel.create(data)
     return  res.send({msg:savedData})

}
module.exports.order=order