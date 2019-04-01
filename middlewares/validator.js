const should = require('should');
const sinon = require('sinon');
const Book = require('../models/bookModel');

describe('Book Controller Tests:', function(){
  describe('Post', function(){
    it('should not allow an empty title on the post', function(){
      let Book = function(book){this.save = function(){}};

      let req = {
        body: {
          author: 'Shittu'
        }
      }
      let res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      let bookController = require('../controllers/bookController');
      bookController.createBook(req, res);
      res.status.calledWith(400).should.equal(true, 'Bad Status '+ res.status);
      res.send.calledWith('Title is required').should.equal(true);
    })
  })
})