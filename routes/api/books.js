const express = require("express");
const router = express.Router();

// Input Validation
const validateBookInput = require("../../validation/book");

// Book model
const Book = require("../../models/Book");

// @route   GET api/books/test
// @desc    Test book route
router.get("/test", (req, res) => res.status(200).json({ msg: "Form works" }));

// @route   get api/book
// @desc    Get all existing books from database and return them
router.get("/", (req, res) => {
  Book.find()
    .then(books => {
      if (!books) {
        return res.status(404).json({ errors: "There are no users" });
      }

      return res.status(200).json(books);
    })
});

// @route   POST api/book/add
// @desc    Add new book to database
router.post("/add", (req, res) => {
  const { errors, isValid } = validateBookInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    isbn: req.body.isbn,
    release: req.body.release,
    releaseDate: req.body.releaseDate,
    numberOfPages: req.body.numberOfPages,
    language: req.body.language,
    category: req.body.category,
    keyWords: req.body.keyWords,
    description: req.body.description
  });

  newBook.save().then(book => res.status(200).json(book));
});

// @route   POST api/books/:id
// @desc    Delete an existing book from database
router.post("/:id", (req, res) => {
  Book.findOneAndDelete({_id: req.params.id})
  .then(() => res.status(200).json({ msg: "success"}));
});

// @route   PUT api/books/:id
// @desc    Edit an existing book from database
router.put("/:id", (req, res) => {
  const { errors, isValid } = validateGameInput(req.body); /////////////////////////////////////////////////

  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  const data = {};

  // Get fields
  data.title = req.body.title;
  data.author = req.body.author;
  data.isbn = req.body.isbn;
  data.publisher = req.body.publisher;
  data.release = req.body.release;
  data.releaseDate = req.body.releaseDate;
  data.numberOfPages = req.body.numberOfPages;
  data.language = req.body.language;
  data.category = req.body.category;
  data.keyWords = req.body.keyWords;
  data.description = req.body.description;

  Book.findOne({ _id: req.params.id }).then(book => {
    if(book) {
      // Update book
      Book.findOneAndUpdate(
        { _id: req.params.id },
        { $set: data },
        { new: false }
      ).then(book => res.status(200).json(book));
    } else {
      res.status(404).json({ book: "There is no such book" });
    }
  });
})

//

router.get("/dupka", (req, res) => {
  console.log("cos");
  console.log(req);
  res.status(200).json({ msg: "Form works" });
  

  //const { errors, isValid } = validateBookInput(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  // const newBook = new Book({
  //   title: req.body.title,
  //   author: req.body.author,
  //   publisher: req.body.publisher,
  //   isbn: req.body.isbn,
  //   release: req.body.release,
  //   releaseDate: req.body.releaseDate,
  //   numberOfPages: req.body.numberOfPages,
  //   language: req.body.language,
  //   category: req.body.category,
  //   keyWords: req.body.keyWords,
  //   description: req.body.description
  // });

  //newBook.save().then(book => res.status(200).json(book));
});

//
module.exports = router;