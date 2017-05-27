module.exports = function(app){

  var book = app.controllers.book;

  app.get('/book/all', book.getAll);
  app.post('/book/save', book.save);
}
