var portfolioView = {};

portfolioView.initialize = function () {
    // $('#aboutMe').hide();
    // $('#contact').hide();
    // $('div[data-article="articles"]').fadeIn(300);
    console.log('hit');
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        $('section > div')
            .hide(500, function(){
                if(e.target.textContent == "About") {
                    $('#aboutMe').toggle();
                }
                if (e.target.textContent == "Work") {
                    $('div[data-article="articles"]').toggle();
                }
                if (e.target.textContent == "Contact") {
                    $('#contact').fadeIn(300);
                }
            });
    })
};

$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});