var portfolioView = {};

portfolioView.initialize = function () {
    $('#aboutMe').hide();
    $('#contact').hide();
    $('div[data-article="articles"]').fadeIn(300);
    console.log('hit');
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        $('section > div')
            .fadeOut(500, function(){
                if(e.target.textContent == "About") {
                    $('#aboutMe').fadeIn(300);
                }
                if (e.target.textContent == "Work") {
                    $('div[data-article="articles"]').fadeIn(300);
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