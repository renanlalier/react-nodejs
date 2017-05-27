module.exports = function(app) {

  var Index = {
    load: function(req, res) {
      res.render('index');
    }
  };

  return Index;

}
