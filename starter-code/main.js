/* console.log("JS file is connected to HTML! Woo!")

var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

if (cardOne === cardTwo) 
{
	alert("You found a match!");
}

else{
	alert("Sorry, try again!");
}

*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

var cardsInPlay =[];

var createCards = function ()
{
	for (var i=0; i<cards.length; i++)
	{
		var cardElement = document.createElement ('div');

		cardElement.className = 'card';

		document.getElementById('game-board').appendChild (cardElement);

	}

}


var createBoard = function () 
{
	var cardElements = document.getElementsByClassName('card');
	for( var t=0; t<cards.length; t++)
	{
		cardElements[t].setAttribute('data-card', cards[t]);
		cardElements[t].addEventListener('click', isTwoCards);
	}
}

var isMatch = function ()
{
		if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		alert("You found a match!");
	}

	else{
		alert("Sorry, try again!");
	}
}

var isTwoCards = function ()
{
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "king" )
		{
			this.innerHTML='<img src="king.png" width="150px" height="200px">';

		}
		else{
			this.innerHTML='<img src="queen.png" width="150px" height="200px">';
		}

	if (cardsInPlay.length==2)
	{
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createCards ();
createBoard ();

