//Cards in game.
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

//Increase length of game with numRows variable.
var rowOfCards = function (numRows) {
	for (var i = 0; i < numRows - 1; i++) {
		cards.push(cards[0]);
		cards.push(cards[1]);
		cards.push(cards[2]);
		cards.push(cards[3]);
	}
}
var numRows = 2;
rowOfCards(numRows);

//Game logic.
var refCards = [];
var cardsInPlay = [];
var cardsPlayed = []; 
var playerScore = 0;

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Good guess, it's a match!");
		playerScore++;
	} else {
		alert("No luck muchacho.");
		//cardsPlayed.pop();
		//cardsPlayed.pop();
	}
	cardsInPlay.pop();
	cardsInPlay.pop();

	//Endgame.
	if (cardsPlayed.length === refCards.length) {
		if (playerScore === 1) {
			alert("Game over! Congratulations you got a match!");
		} else if (playerScore > 1) {
			alert("Game over! Congratulations you got " + playerScore + " matches!");
		} else {
			alert("Game over! Better luck next time...");
		}
	}
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	if (cardsPlayed.includes(cardId) === true) {
		return;
	}
	this.setAttribute("src", refCards[cardId][0].cardImage);
	//console.log("User flipped " + refCards[cardId][0].rank + " of " + refCards[cardId][0].suit);

	//checkForMatch data.
	if (numRows === 1) {
		cardsInPlay.push(refCards[cardId][0].rank);
	} else {
		cardsInPlay.push(refCards[cardId][0].rank + refCards[cardId][0].suit);
	}
	cardsPlayed.push(cardId);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 200);
	}
};

var createBoard = function () {
	for (i = 0; i < (cards.length + refCards.length); i++) {
		var y = 0;
		var x = Math.floor(Math.random() * cards.length);
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		y = cards.slice(x, x + 1);
		cards.splice(x, 1);
		refCards.push(y);
	}
};

createBoard();
