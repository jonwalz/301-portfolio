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
    var $newPiece = $('#templateDiv').clone(); //this creates a clone to save all styling and formatting

    $newPiece.find(".pieceTitle").html(this.title);
    $newPiece.find(".description p").html(this.description);
    $newPiece.find(".dateTime").html(this.date);
    $newPiece.append('<hr>');

    $newPiece.removeClass('template');

    return $newPiece;
};

portfolioPieces.forEach(function(el){
    portfolioBlocks.push(new Piece(el))
});

portfolioBlocks.forEach(function(p){
   $("#templateDiv").parent().append(p.postIt());
});

