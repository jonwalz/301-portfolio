var portfolioBlocks = [];

function Piece(keys) {
    // Title, Date, Url, Github url, Description, imgUrl
    this.title = keys.title;
    this.date = keys.date;
    this.url = keys.url;
    this.gitUrl = keys.gitUrl;
    this.description = keys.description;
    this.imgUrl = keys.imgUrl;
}

Piece.prototype.postIt = function(){

    var newPiece = $('#template').html();

    var compiledPost = Handlebars.compile(newPiece);

    return compiledPost(this);
};

portfolioPieces.forEach(function(el){
    portfolioBlocks.push(new Piece(el))
});

portfolioBlocks.forEach(function(p){
   $("#workTemplate").append(p.postIt());
   console.log( "POST IT");
});