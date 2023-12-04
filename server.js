const express=require('express')
const mongoose = require('mongoose')
const Book = require('./models/book')
const app=express()
const dotenv=require('dotenv').config();

app.use(express.json())

const port=process.env.PORT

// app.get('/', (req,res)=>{
//     res.send('HELLO Duniyaaa')
// })

//get all books 
app.get('/books', async(req,res)=>{
    try {
        const books = await Book.find({});
        res.status(200).json(books)
    } catch (error) {
        console.log(error.mssg)
        res.status(500).json({mssg: error.mssg})
    }
})

//get book by its Id 
app.get('/books/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book)
    } catch (error) {
        console.log(error.mssg)
        res.status(500).json({mssg: error.mssg})
    }
})

//update book details
app.put('/books/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if(!book){
           res.status(404).send(`Book Not found in the library with ${id} ..... Oops! Sorry`)
        }
        res.status(200).json(book)
    } catch (error) {
        console.log(error.mssg)
        res.status(500).json({mssg: error.mssg})
    }
})


//adding a new book 
app.post('/books', async(req,res)=>{
    try {
        const {name, author, genre}=req.body;
        if(!name || !author || !genre){
            res.status(400).send('All Fields are necessary')
        }
        //validation check for duplicacy
        const existingBook = Book.findOne({name,author})
        if(existingBook){
            res.status(400).send(`Book already exists... cant add this one.. good Day!`);
        }
        else {
            const book = await Book.create(req.body);
        res.status(200).json(book)
        }
    } catch (error) {
        console.log(error.mssg)
        res.status(500).json({mssg: error.mssg})
    }
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('MongoDb LetsBloom')},
    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`)
    })
).catch((err)=>{
    console.log('Not Fondd any')
})