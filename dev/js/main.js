(function (module) {

function Piece(keys) {
    // Title, Date, Url, Github url, Description, imgUrl
    this.title = keys.title;
    this.date = keys.date;
    this.url = keys.url;
    this.gitUrl = keys.gitUrl;
    this.description = keys.description;
    this.imgUrl = keys.imgUrl;
}
Piece.all = [];

Piece.prototype.postIt = function(){

    var newPiece = $('#template').html();

    var compiledPost = Handlebars.compile(newPiece);
    console.log("Handlebars view ran");
    return compiledPost(this);

};

Piece.loadAll = function (rawData) {
    Piece.all = rawData.map(function(el){
        return new Piece(el);
    });
};

Piece.fetchData = function(callback) {
        $.getJSON('/data/portfolioData.json', function (rawData) {
            console.log(rawData);
            Piece.loadAll(rawData);
            localStorage.portPieces = JSON.stringify(rawData);

            callback();
    });
};

module.Piece = Piece;

})(window);