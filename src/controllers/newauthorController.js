const newAuthorModel = require("../models/newauthormodel");

const createAuthor=async function(req,res){
    let data=req.body;
    let savedData=await newAuthorModel.create(data);
    res.send(savedData);
}

module.exports.createAuthor=createAuthor;