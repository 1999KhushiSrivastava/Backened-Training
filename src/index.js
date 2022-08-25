const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://khushi123456789:khushi123456789@cluster0.xcf6vy2.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function(req,res,next){
        const time = moment().format("YYY-MM-DD hh:mm")
        const ip = req.socket.localAddress
        const path = req.url
        console.log("Done")
        console.log(time,ip,path)
        res.send("testing done")
        //  next();
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
