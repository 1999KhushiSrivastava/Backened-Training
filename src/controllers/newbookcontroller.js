const e = require("express");
const { set } = require("mongoose");
const newAuthorModel = require("../models/newauthormodel");
const newBookModel = require("../models/newbookmodel");
const newPublisherModel = require("../models/newpublishermodel");

const createBook = async function (req, res) {


  let b = req.body.author;
  let d = req.body.publisher;
  let a = await newAuthorModel.findOne({ "_id": { $in: [b] } })
  let c = await newPublisherModel.findOne({ "_id": { $in: [d] } })




  if (b) {
    if (d) {
      if (a == null || a.id != b) {
        res.send("Enter valid author id")

      } else {
        if (c == null || c.id != d) {
          res.send("publisher id is not valid")
        } else if (a.id == b && c.id == d) {

          let savedData = await newBookModel.create(req.body); //create entry
          res.send(savedData)

        }
      }
    } else {
      res.send("Publisher is mandatory")
    }
  } else {
    res.send("Author is mandatory")
  }

}
//getData
const getData = async function (req, res) {

  const savedData = await newBookModel.find().populate("author").populate("publisher");
  res.send({ savedData })
}
//update-1


let updateBol = async function (req, res) {
  let res1 = await newPublisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } });
  let res2 = res1.map(x => x.id);
  let res3 = await newBookModel.updateMany(
    { publisher: res2 }, //condition
    { $set: { isHardCover: true } },
    { upsert: true }


  )
  res.send(res3)
}

//update-2


let update = async function (req, res) {


  let res1 = await newAuthorModel.find({ rating: { $gt: 3.5 } })
  let res2 = res1.map(x => x.id)

  let res3 = await newBookModel.updateMany(
    { author: res2 }, //condtion
    { $inc: { price: 10 } }, //update
    { new: true }
  )
  res.send(res3)
}
module.exports.createBook = createBook;
module.exports.getData = getData;
module.exports.update = update;
module.exports.updateBol = updateBol