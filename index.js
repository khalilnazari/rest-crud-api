const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 
dotenv.config(); 
const router = express.Router(); 
// use json for data transer 
app.use(express.json()); 


// import routes 

// use routes 

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`))