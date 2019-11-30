

//Defining players' objects to hold their game-related information.

//Player 1;
var player1={name:"player1",
color: "red",
numberOfRoundsWon:0};

//Player 2;
var player2={name:"player2",
color: "yellow",
numberOfRoundsWon:0};

//------------------------------------------------------------------------------------------------------------------------

var numberOfCirclesClicked1=0; // a counter to keep tracking the number of circles already checked by player1.
var numberOfCirclesClicked2=0; // a counter to keep tracking the number of circles already checked by player2.
//we will use the counters above as a condition to start checking for winning.
//The game should check for winners only if either player have 4 circles or more of the board checked.


//Let the first turn of the game be player 1's turn.
var turn=player1;
$(document).ready(function(){
	$("[id*='circle-']").click(function(){
		var color=turn.color
      $(this).addClass(color);
      console.log($(this).attr('id'));
      console.log($(this).attr("class").split(/\s+/));

      $(this).off("click"); //Once the circle is checked, the player can no loger interact with it again.
      switchTurns(); //Give the turn to the other player.
        });
});


//-------------------------------------------------------------------------------------------------------------------------

//switchTurns() function will be used to switch the turns between the two players depending on the current player.

function switchTurns(){
	if (turn==player1){
		turn=player2;
	}
	else{
		turn=player1;
	}
}

//-------------------------------------------------------------------------------------------------------------------------
