const express = require('express');

const bookController = require('../controllers/bookController');
const Middlware = require('../middlewares');

const router = express.Router();

router.get('/', bookController.homepage );
router.get('/books', bookController.getBooks);
router.post('/book', bookController.createBook);
router.delete('/:bookId', bookController.deleteBook);



module.exports = router;
