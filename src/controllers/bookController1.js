let bookModel = require('../models/bookModels')
let authorModel = require('../models/authorModels')
const authorModels = require('../models/authorModels')
 
// create Book
let createBook1= async function (req, res) {
  let data= req.body//object

  let savedData= await bookModel.create(data)
  res.send({msg: savedData})
}

//create authorInfo
let createAuthorInfo=async function(req,res){
  let data = req.body
  let authorId = data.author_id
  if(!authorId){
    return res.send({status:false,msg:"author id must be present"})
  }
  let savedData= await authorModel.create(data)
  res.send({msg:savedData})
}

// get author id of "chetan Bhagat"
let getBook = async function (req, res){
    

  let authorData  = await authorModel.find({author_name: "Chetan Bhagat"})
  let getId = authorData[0].author_id
  let bookData = await bookModel.find({author_id : getId}).select({name : 1})
  
  res.send({msg: bookData})

}
//find author of two states and update book price to 100;
let updatePrice = async function(req,res){
  let result1=await bookModel.findOneAndUpdate(
    {name:"Two states"},
  {$set:{Price:100}}
  )
  let result2=await bookModel.findOne({name:"Two states"}).select({Price:1})
  let result3=await authorModels.findOne({author_id:result1.author_id}).select({author_name:1})

  res.send({result2,result3})
}

//---------------------------------------------------------------------//
let range = async function(req,res){
  let result= await bookModel.find({Price : {$gte: 50} , Price: {$lte: 100}}).select({author_id:1})
   let b = result.map(x=>x.author_id)
  let results = await authorModels.find({author_id:b}).select({author_name:1, _id:0})

  res.send({msg: results})
}



module.exports.createBook1 = createBook1
module.exports.createAuthorInfo = createAuthorInfo
module.exports.getBook =getBook
module.exports.updatePrice = updatePrice
module.exports.range = range