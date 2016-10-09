page('/', function () {
    Piece.fetchData(portfolioView.initIndexPage);
    articleController.index();
});

page('/work', function(){
    articleController.index();
});

page('/about', function () {
    aboutController.index();
});

page('/contact', function(){

    contactController.index();
});

page('/github', function(){
    repos.requestRepos(repoController.index);
});

page();