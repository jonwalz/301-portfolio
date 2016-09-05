var portfolioView = {};

portfolioView.initialize = function () {
    $('#aboutMe').hide();
    $('#contact').hide();
    // $('div[data-article="articles"]').fadeIn(300);
    console.log('hit');
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
            $("div[data-article='articles']")
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

$(document).ready(function(){
    portfolioView.initialize();
    portfolioView.navViews();
});