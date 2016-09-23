// This is a module for creating the view as the user interacts
(function(module){

var portfolioView = {};

portfolioView.initialize = function () { // This method hides the 'about me' and 'contact' section on load
    $('#aboutMe').hide();
    $('#contact').hide();
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        // These if statements toggle the page view when navigation links are clicked by user
        // If the text of the clicked event target equals the string in the condition, the entire section is hidden
        // then the section related to the click is shown

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


$(document).ready(function(){ // These function calls initiate the views after the document has loaded
    portfolioView.initialize();
    portfolioView.navViews();
});

    module.portfolioView = portfolioView;
})(window);
