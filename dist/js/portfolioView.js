(function(module){

var portfolioView = {};

portfolioView.initialize = function () {
    $('#aboutMe').hide();
    $('#contact').hide();
};

portfolioView.navViews = function() {

    $('.main-nav').on('click', function(e){
        e.preventDefault();


        if(e.target.text == "About") {
            $('section > div').slideUp(300);
            $('#aboutMe')
                .delay(200)
                .hide()
                .slideDown(300);
        }
        if(e.target.text == "Work") {
            $('section > div').slideUp(300);
            $("#workTemplate")
                .delay(200)
                .hide()
                .each(function (i) {
                    $(this)
                        .delay(200*i)
                        .slideDown(300);
            })
        }

        if(e.target.text == "Contact") {
            $('section > div').slideUp(300);
            $('#contact').animate({
                height: "toggle"
            }, 300);
        }

    })
};

portfolioView.initIndexPage = function () {
  Piece.all.forEach(function(a) {
      $('#workTemplate').append(a.postIt());
  })
};


$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});

    module.portfolioView = portfolioView;
})(window);