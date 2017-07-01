module.exports = ClozeCard;

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	
	//console logs the partial card
	this.partial = function(){
		var partString = text.slice(cloze.length);
		console.log("..." + partString);
	};
	
	//console logs the full text
	this.fullText = function(){
		console.log(this.text);
	};
	
	//throws an error console log when cloze part isn't found in the full text
	
	var pos = this.text.indexOf(this.cloze);
	if (pos === -1){
	console.log(this.cloze + " doesn't appear in " + this.text);
	}
	

};

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial());

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText());

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");