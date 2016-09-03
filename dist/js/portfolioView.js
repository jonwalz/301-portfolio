var portfolioView = {};

portfolioView.initialize = function () {
    $('#aboutMe').hide();
    $('#contact').hide();
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        $('section div')
            .fadeOut(500);

        if(e.target.textContent == "About") {
            $('#aboutMe').fadeIn(400);

        } else if (e.target.textContent == "Work") {
            $('section div')
                .fadeOut(300)
                .not('#aboutMe, #contact', ".template")
                .fadeIn(300);
        } else if (e.target.textContent == "Contact") {
            $('section div')
                .fadeOut(300);
            $('#contact')
                .fadeIn(300);
        }

    })
};
$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});