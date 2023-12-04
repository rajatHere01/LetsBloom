const mongoose = require("mongoose");

const bookSchema=mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please fill the title of the book"],
    },
    author:{
        type: String,
        required: [true, "Please fill the author's name of the book"],
    },
    genre:{
        type: String,
        required: [true, "Please fill the genre of the book"],
    }
},
    {
        timestamps: true,
    }    
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;