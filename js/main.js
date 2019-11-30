
//An array to hold players information.
var players=[

//Player 1;
{name:"player1",
color: "red",
numberOfRoundsWon:0},

//Player 2;
{name:"player2",
color: "yellow",
numberOfRoundsWon:0},

];


var numberOfCirclesClicked1=0; // a counter to keep tracking the number of circles already checked by player1.
var numberOfCirclesClicked2=0; // a counter to keep tracking the number of circles already checked by player2.
//we will use the counters above as a condition to start checking for winning.
//The game should check for winners only if either player have 4 circles or more of the board checked.

$(document).ready(function(){
	$("[id*='circle-']").click(function(){
      $(this).addClass("red");

        });

});