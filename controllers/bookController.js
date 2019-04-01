const Book = require('../models/bookModel');

  let homepage =  (req, res) => {
    res.send('Welcome to the Homepage of the APP!!!');
  }
  
  let getBooks = (req, res) => {
    let query = {};
    if(req.query.genre){
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if(err){
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  }

  let getOneBook =  (req, res) => {
    res.json(req.book);
  }

  let createBook = (req, res) => {
    let book = new Book(req.body);
    book.save((err, result) => {
      if(err){
        res.status(500);
        res.send(err);
      } else {
        res.status(201);
        res.send(result);
      }
    });
  }
  let updateAllBookFeature = (req, res) => {
    req.book.title = req.body.title;
    req.book.author = req.body.author;
    req.book.genre = req.body.genre;
    req.book.read = req.body.read;
    req.book.save((err) => {
      if(err){
        res.status(500).send(err);
      } else {
        res.json(req.book);
      }
    });
  }

  let updateOneBookFeature = (req, res) => {
    if(req.body._id)
      delete req.body._id;
    for(let p in req.body){
      req.book[p] = req.body[p];
    }
    req.book.save((err) => {
      if(err){
        res.status(500).send(err);
      } else {
        res.json(req.book);
      }
    });
  }

  let deleteBook = (req, res) => {
    req.book.remove((err) => {
      if(err){
        res.status(500).send(err);
      } else {
        res.status(204).send('Successfully removed!');
      }
    });
  }

  module.exports = { homepage, getBooks, getOneBook, createBook, updateAllBookFeature,  deleteBook, updateOneBookFeature };