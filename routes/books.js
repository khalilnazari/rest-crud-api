const router = require('express').Router(); 
const Book = require('../models/Book'); 

// send error function 
// delete .delete()
const sendError = (error, res) => {
    res.status(500).json("Oh it's my bad! Internal Error."); 
    console.log(error.message)
}

// create - .post();
router.post('/api/book/', async (req, res) => {
    const premision = true; 
    const bookData = new Book(req.body); 
    
    if(premision) {
        try {
            const newBook = await bookData.save(); 
            res.status(201).json(newBook); 
        } catch (error) {
            sendError(error, res);
        }
    } else {
        res.status(400).json("Permision denied!")
    }
})


// update - .put(); 
router.put('/api/book/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        const response = await Book.findByIdAndUpdate(id, {$set: req.body}, {new : true}); 
        res.status(200).json(response);
    } catch (error) {
        sendError(error, res);
    }
})

// read  - .get();
// read all - .get();
router.get('/api/book/', async (req, res) => {
    try {
        const response = await Book.find();
        res.status(200).json(response)
    } catch (error) {
        sendError(error, res);
    }
})




module.exports = router; 