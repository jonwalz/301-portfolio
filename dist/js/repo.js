(function(module) {
    var repos = {};

    repos.all = [];

    repos.requestRepos = function(callback) {
        // TODO: -DONE- How would you like to fetch your repos? Don't forget to call the callback.

        $.ajax({
            url: 'https://api.github.com/users/jonwalz/repos',
            type: 'GET',
            success: function(data) {
                console.log(data);
                repos.all = data;
                callback();
            },
            error: function() {
                console.log('Error: yes, this is an error.');
            }
        });

    };
    // This attaches the repos with the given attribute
    repos.with = function(attr) {
        return repos.all.filter(function(repo) {
            return repo[attr];
        });
    };

    module.repos = repos;
})(window);