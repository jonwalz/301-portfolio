function Piece(t){this.title=t.title,this.date=t.date,this.url=t.url,this.gitUrl=t.gitUrl,this.description=t.description,this.imgUrl=t.imgUrl}var portfolioBlocks=[];Piece.prototype.postIt=function(){var t=$("#template").html(),o=Handlebars.compile(t);return o(this)},portfolioPieces.forEach(function(t){portfolioBlocks.push(new Piece(t))}),portfolioBlocks.forEach(function(t){$("#workTemplate").append(t.postIt()),console.log("POST IT")});