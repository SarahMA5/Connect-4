

//Defining players' objects to hold their game-related information.

//Player 1;
//we will use the counters below as a condition to start checking for winning.
//The game should check for winners only if either player have 4 circles or more of the board checked.

var player1={name:"player1",
color: "red",
numberOfCirclesClicked:0, // a counter to keep tracking the number of circles already checked by the player
numberOfRoundsWon:0};

//Player 2;
var player2={name:"player2",
color: "yellow",
numberOfCirclesClicked:0,
numberOfRoundsWon:0};

var totalCirclesChecked=0;

//------------------------------------------------------------------------------------------------------------------------


//Let the first turn of the game be player 1's turn.
var turn=player1;
$(document).ready(function(){
	$("[id*='circle-']").click(function(){
		var color=turn.color
      $(this).addClass(color);
      updateCounters();
      console.log(turn.numberOfCirclesClicked);
      console.log($(this).attr('id'));
      var classList=($(this).attr("class").split(/\s+/));

      for(var i=0; i<classList.length; i++) {
      	console.log("inside for loop")
      	switch(classList[i]){
		//console.log("inside switch statement");
      		case "first-diagonal":{
      			console.log("inside the first case")
      			var arr=document.querySelectorAll(".first-diagonal");
      			console.log(arr);
      		}
      	}
}
      $(this).off("click"); //Once the circle is checked, the player can no loger interact with it again.

      if(turn.numberOfCirclesClicked>=4){
      	      		console.log("hi");
      	 console.log(classList);

      	if ($(this).hasClass("[id*='- column']")){
      		console.log("hi2");
      	}
      }

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

function updateCounters(){
	getCurrentPlayer().numberOfCirclesClicked++;
	totalCirclesChecked++;

}



function getCurrentPlayer(){
	if (turn==player1){
		return player1;
	}
	else{
		return player2;
	}
}