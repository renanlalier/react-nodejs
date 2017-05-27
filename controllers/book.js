var Book = require('../models/book').Book;

module.exports = function(app) {

  var BookController = {

    getAll: function(req, res){
      Book.find({}, function(err, books){
        if (err) return console.error(err);
        res.send(books);
      });
    },

    save: function(req, res) {
      let title = req.body.title;
      let description = req.body.description;

      var book = new Book({
        title: title,
        description: description
      });

      book.save(function(err, book) {
        if (err) return console.error(err);
        console.dir('Salvo com sucesso: ' + book);
      });
    }
  };

  return BookController;
}
