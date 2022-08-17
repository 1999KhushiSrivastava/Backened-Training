const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController1")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", BookController1.createBook1)

router.get("/bookList", BookController1.bookList1)


 router.post("/getBookInYear", BookController1.getBookInYear)

 router.post("/getParticularBook", BookController1.getParticularBook)

 router.get("/getXINRBook",BookController1.getXINRBook)


 router.get("/getRandomBook",BookController1.getRandomBook)

module.exports = router;