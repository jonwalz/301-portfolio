var portfolioView = {};

portfolioView.populateSelectors = function () {

};

portfolioView.navViews = function() {
    $('.aside-wrapper').on('click', function(e){
        e.preventDefault();
        var target = $(e.target);
        if(target.is(".no-display")) {
            console.log('passed');
            target.removeClass('.no-display');

            target.parent().children().not(target).addClass('.noDisplay');
        }
    })
};
$(document).ready(function(){

    portfolioView.navViews();
});