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

    return compiledPost(this);
};

// portfolioPieces.forEach(function(el){
//     portfolioBlocks.push(new Piece(el))
// });
//
// portfolioBlocks.forEach(function(p){
//    $("#workTemplate").append(p.postIt());
//
// });

Piece.loadAll = function (rawData) {
    Piece.all = rawData.map(function(el){
        return new Piece(el);
    });
};

Piece.fetchData = function(callback) {
    if(localStorage.portPieces) {
        Piece.loadAll(JSON.parse(localStorage.portPieces));
        callback();
    } else {
        $.getJSON('/data/portfolioData.json', function (rawData) {
            console.log(rawData);
            Piece.loadAll(rawData);
            localStorage.portPieces = JSON.stringify(rawData);

            callback();
        });
    }
};

module.Piece = Piece;

})(window);