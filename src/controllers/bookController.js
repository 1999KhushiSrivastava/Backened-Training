const bookModel = require("../models/bookModel")

const createNewBook = async function(req,res){
  let data = req.body 
  let savedData = await bookModel.create(data)
  
  res.send({msg:savedData})
}

const getBooksData = async function(req,res){
  let allBook = await bookModel.find()
  res.send({msg:allBook})
}

module.exports.createNewBook = createNewBook
module.exports.getBooksData = getBooksData