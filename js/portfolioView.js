var portfolioView = {};

portfolioView.populateSelectors = function () {

};

portfolioView.navViews = function() {
    $('.main-nav').on('click', function(e){
        e.preventDefault();

        // change display of nav bar
        if(e.target.textContent == "About") {
            $('.active')
                .fadeOut('slow')
                .addClass('no-display')
                .next()
                .removeClass('no-display')
                .fadeIn('slow');

            // change display of content
            $('')
        }

    })
};
$(document).ready(function(){

    portfolioView.navViews();
});