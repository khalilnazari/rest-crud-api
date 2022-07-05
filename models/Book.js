// this model is used for all C.R.U.D. Operations 
const mongoose = require('mongoose'); 

const BookSchema = new mongoose.Schema (
    {
        title: {
            type: String, 
            required: true, 
            unique: true
        }, 
        totalPages: {
            type: Number, 
            require: true
        },
        isb: {
            type: Number,
            required: true 
        },
        authorFirstName: {
            type: String, 
            required: true
        }, 
        authorMiddleName: {
            type: String, 
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
    }, 
    {timestamps: true}
); 


// export schema (used in routes)
module.exports = mongoose.model("Book", BookSchema)