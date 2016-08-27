var portfolioPieces = [];

function Piece(keys) {
    // Title, Date, Url, Github url, Description
    this.title = keys.title;
    this.date = keys.date;
    this.url = keys.url;
    this.gitUrl = keys.gitUrl;
    this.description = keys.description;
}

Piece.prototype.toHtml = function(){
    var $newPiece = $('')
};