const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  release: {
    type: String,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  numberOfPages: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
  },
  category: {
    type: String,
  },
  keyWords: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("books", BookSchema);