const Book = require('../models/bookModel');

let bookByIdMiddleware = (req, res, next) => {
  Book.findById(req.params.bookId, (err, book) => {
    if(err){
      res.status(500).send(err);
    } else if(book) {
      req.book = book;
      next();
    } else {
      res.status(400).send('No book found!');
    }
  });
}

module.exports = { bookByIdMiddleware }