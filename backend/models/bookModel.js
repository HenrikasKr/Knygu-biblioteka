const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    book_title: {
        type: String,
        required:true,
    },
    book_author: {
        type: String,
        required:true,
    },
    book_category: {
        type: String,
        default: "Kita",
        required:true,
    },
    book_date: {
        type: Date,
        required:true,
    },
});

const Book = new mongoose.model("Book", bookSchema);

// Duomenų siuntimas į DB
const addBook = new Book({

    book_title: "Testas",
    book_author: "Testas Testuotojas",
    book_category: "Sci-Fi",
    book_date: "2001-04-06",

});

addBook.save();

module.exports = Book;