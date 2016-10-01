(function (module) {
    var aboutController = {};

    // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    aboutController.index = function () {
        $('#contact').hide();

        $('section > div').slideUp(300);
        $('#aboutMe')
            .delay(200)
            .hide()
            .slideDown(300);
    };

    module.aboutController = aboutController;
})(window);