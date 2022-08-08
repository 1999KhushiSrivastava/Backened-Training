const express = require('express');
//const abc = require('./intro')
//   const xyz = require('../logger/logger');
//    const  x1y1z1 = require('../util/helper');
//    const x2y2z2 = require('../validator/formatter')
// const underscore = require ('underscore')
const router = express.Router();

const lodas =require('lodash');
router.get('/test-me', function (req, res){  // /test-me --> endpoint ,  function(route handler)(buisness logic)
    //console.log('My batch is',abc. batchName)
    // xyz.test()
    //   x1y1z1.tss()
    //   x1y1z1.kks()
    //   x1y1z1.pp()
    // console.log(x2y2z2.AA)
    // console.log(x2y2z2.BB)
    // console.log(x2y2z2.CC)
    
    //  res.send("My second ever api!")


const arr = ['january','feburary','March','April','MAy','June','July','August','september','october','november','December']
console.log(lodas.chunk(arr,4))
const odd = [1,3,5,7,9,11,13,15,17,19,21];
console.log(lodas.tail(odd))
const arr1 = [1,2,3,4];
const arr2 = [2,4,7,9];
const arr3 = [4,5,2,8];
const arr4 = [4,8,3,2];
console.log(lodas.uniq(arr1,arr2,arr3,arr4));
const keyval=[["khushi","kajol"],["krishna","gopal"],["ram","vishnu"],["kamesh","ayush"]]
console.log(lodas.fromPairs(keyval));

});

router.get('/test-you', function(req, res){ 
    
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;



