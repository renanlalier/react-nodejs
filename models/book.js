var Mongoose = require('mongoose');

var bookSchema = new Mongoose.Schema({
  title: String,
  description: String
});

var Book = Mongoose.model('Book', bookSchema);

module.exports = {
  Book: Book
}
