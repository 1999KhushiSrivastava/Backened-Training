const bookModel = require('../models/bookmodel1')
//------------------------------------------------------------------------------------//
const createBook1 = async function(req,res){
  let data = req.body

  let savedData = await bookModel.create(data)
  res.send ({msg : savedData})

}
//----------------------------------------------------------------------//
const bookList1 = async function(req,res){
  let allBook = await bookModel.find().select({bookName:1,authorName:1, _id:0})
  res.send({msg: allBook})
}
//-----------------------------------------------------------------------------------//
const getBookInYear = async function(req,res){
  let bookYear = req.query.Year
  let yearData = await bookModel.find({Year:bookYear}).select({bookName:1, _id:0})
  res.send({msg:yearData})
}
//--------------------------------------------------------------------------------------//
const getParticularBook = async function(req,res){
  let particularBook = req.query.authorName
  let getAllBook = await bookModel.find({authorName : particularBook})
  res.send({msg : getAllBook})
}
//------------------------------------------------------------------------------------//
const getXINRBook= async function (req, res){
  let getBook =  await bookModel.find({'price.indianPrice':{$in:["rs 100","rs 200","rs 500"]}})
    res.send( {msg: getBook}  )

}
    

//----------------------------------------------------------------------------------------------//
const getRandomBook = async function(req,res){
  let randomBook = await bookModel.find({$or: [{stockAvailable :true},{totalPages:{$gt:20}}]})
  res.send({msg : randomBook})
}

module.exports.createBook1= createBook1
module.exports.bookList1 = bookList1
module.exports.getBookInYear = getBookInYear
 module.exports.getParticularBook=getParticularBook
 module.exports.getXINRBook = getXINRBook
module.exports.getRandomBook=getRandomBook

// { "price.indianRupees": { $in: ["₹200", "₹250", "₹500"] } }

// { totalPages: { $gte: 500 }, stockAvailable: true }