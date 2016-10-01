(function (module) {
    var articleController = {};

    // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    articleController.index = function () {


        $('section > div').slideUp(300);
        $("#workTemplate")
            .delay(200)
            .hide()
            .each(function (i) {
                $(this)
                    .delay(200 * i)
                    .slideDown(300);
            })
    };

    module.articleController = articleController;
})(window);