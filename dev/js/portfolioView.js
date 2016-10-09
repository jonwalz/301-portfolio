// This is a module for creating the view as the user interacts
(function(module){

var portfolioView = {};

portfolioView.initIndexPage = function () {
    $("#aboutMe").hide();
    $("#contact").hide();
  Piece.all.forEach(function(a) {
      $('#workTemplate').append(a.postIt());
  })
};

    module.portfolioView = portfolioView;
})(window);
