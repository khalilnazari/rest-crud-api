const router = require('express').Router(); 
const Book = require('../models/Book'); 


// create - .post();
router.post('/api/book/', async (req, res) => {
    const premision = true; 
    const bookData = new Book(req.body); 
    
    if(premision) {
        try {
            const newBook = await bookData.save(); 
            res.status(201).json(newBook); 
        } catch (error) {
            res.status(500).json(error.message); 
        }
    } else {
        res.status(400).json("Permision denied!")
    }
})


// update - .put(); 


// read  - .get();
// read all - .get();

// delete .delete()


module.exports = router; 