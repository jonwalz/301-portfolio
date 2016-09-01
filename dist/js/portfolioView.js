var portfolioView = {};

portfolioView.initialize = function () {
    $('#aboutMe').hide();
    $('#contact').hide();
};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        $('section div')
            .not(this)
            .fadeOut(500);
        console.log(this);
        $(this).fadeIn(500);

        // change display of nav bar
        if(e.target.textContent == "About") {
            $('#aboutMe').fadeIn(500);
            // change display of content


        } else if (e.target.textContent == "Work") {

        }

    })
};
$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});