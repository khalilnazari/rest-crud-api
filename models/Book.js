// this model is used for all C.R.U.D. Operations 
const mongoose = require('mongoose'); 

const BookSchema = new mongoose.Schema (
    {
        title: {
            type: String, 
            required: true, 
            unique: true
        }, 
        authorFirstName: {
            type: String, 
            required: true
        }, 
        authorMiddleName: {
            type: String, 
            required: true
        }, 
        authorLastName: {
            type: String, 
            required: true
        }, 
        publishedYear: {
            type: Number, 
            require: true
        }, 
        publiser: {
            type: String, 
            required: true
        }, 
        totalPages: {
            type: Number, 
            require: true
        }, 

    }, 
    {timestamps: true}
); 


// export schema (used in routes)
module.exports = mongoose.model("Book", BookSchema)