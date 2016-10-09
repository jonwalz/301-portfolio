(function (module) {
    var repoController = {};

    repoController.index = function () {
        console.log("REPO CONTROLLER RAN");
        $('section > div').slideUp(300);
        $("#gitReposRendered")
            .delay(200)
            .hide()
            .each(function (i) {
                $(this)
                    .delay(200 * i)
                    .slideDown(300);
            });
    repos.requestRepos(repoView.index);
    };

    module.repoController = repoController;
})(window);