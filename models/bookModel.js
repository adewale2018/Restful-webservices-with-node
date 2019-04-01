const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      let bookModel = new Schema ({
        title: {
          type: String
        },
        author: {
          type: String
        },
        genre: {
          type: String
        },
        read: {
          type: Boolean, default: false
        }
      });
module.exports = mongoose.model('Book', bookModel);