const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBookInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.isbn = !isEmpty(data.isbn) ? data.isbn : "";
  data.publisher = !isEmpty(data.publisher) ? data.publisher : "";
  // data.release = !isEmpty(data.release) ? data.release : "";
  data.releaseDate = !isEmpty(data.releaseDate) ? data.releaseDate : "";
  data.numberOfPages = !isEmpty(data.numberOfPages) ? data.numberOfPages : "";
  // data.language = !isEmpty(data.language) ? data.language : "";
  //data.category = !isEmpty(data.category) ? data.category : "";
  // data.keyWords = !isEmpty(data.keyWords) ? data.keyWords : "";
  //data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Book title must be specified";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Book author must be specified";
  }

  if (Validator.isEmpty(data.isbn)) {
    errors.isbn = "Book isbn must be specified";
  }

  if (Validator.isEmpty(data.publisher)) {
    errors.publisher = "Book publisher must be specified";
  }

  if (Validator.isEmpty(data.releaseDate)) {
    errors.releaseDate = "Book releaseDate must be specified";
  }

  if (Validator.isEmpty(data.numberOfPages)) {
    errors.numberOfPages = "Book number of pages must be specified";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};