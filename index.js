const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 
dotenv.config(); 

const router = express.Router(); 
const userRouter = router.get('/api/users', (req, res) => {
    res.status(200).json({name: "khalil", age: 12, city: 'KL'})
})

app.use(userRouter); 

// use json for data transer 
app.use(express.json())

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`))