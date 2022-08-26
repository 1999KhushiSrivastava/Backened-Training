const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    isIndian: Boolean,
    parentsInfo: {
        motherName: String,
        fatherName: String,
        siblingName: String
    },
    cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array


// _id: ObjectId("61951bfa4d9fe0d34da86829"),
// name: "Sabiha Khan",
// balance:100, // Default balance at user registration is 100
// address:"New delhi",
// age: 90,
//  gender: “female” // Allowed values are - “male”, “female”, “other”
// isFreeAppUser: false // Default false value.
// }