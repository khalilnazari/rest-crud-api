const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 
dotenv.config(); 
const router = express.Router(); 
// use json for data transer 
app.use(express.json()); 


// Database connection 
const mongoDBURL = process.env.DBURL; 
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology : true,
})
.then(() => console.log("Connected to Atlas server successfully!"))
.catch(error=>console.log(error))


// import routes 
const bookRoutes = require('./routes/books'); 
// use routes 
app.use(bookRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`))