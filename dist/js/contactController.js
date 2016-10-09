(function (module) {
    var contactController = {};

    // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
    contactController.index = function () {
        $('section > div').slideUp(300);
        $("#contact")
            .delay(200)
            .hide()
            .each(function (i) {
                $(this)
                    .delay(200 * i)
                    .slideDown(300);
            })
    };
    module.contactController = contactController;
})(window);