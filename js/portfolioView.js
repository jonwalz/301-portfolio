var portfolioView = {};

portfolioView.initialize = function () {
  $('#aboutMe').hide();
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        // change display of nav bar
        if(e.target.textContent == "About") {

            // change display of content
            $('section')
                .find('div')
                .not('#aboutMe')
                .addClass('no-display');

            $('#aboutMe')
                .fadeIn(500);
        }

    })
};
$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});