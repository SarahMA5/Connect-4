

//Defining players' objects to hold their game-related information.

//Player 1;
//we will use the counters below as a condition to start checking for winning.
//The game should check for winners only if either player have 4 circles or more of the board checked.

var player1={name:"player 1",
color: "red",
numberOfCirclesClicked:0, // a counter to keep tracking the number of circles already checked by the player
numberOfRoundsWon:0};

//Player 2;
var player2={name:"player 2",
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

     
      $(this).off("click"); //Once the circle is checked, the player can no loger interact with it again.

      if(turn.numberOfCirclesClicked>=4){


 //-----------------------------------------------------
 var classList=($(this).attr("class").split(/\s+/));
      for(var i=0; i<classList.length; i++) {
      	console.log("inside for loop")
      	switch(classList[i]){
      		case "first-diagonal":{
      			console.log("inside the first case")
      			var arr=document.querySelectorAll(".first-diagonal");
      			console.log(arr[2].id);
      			var winningCirclesCounter=0;
      			for(j=0;j<arr.length;j++){
      				console.log("Now I'm reading "+arr[j].id);
      				console.log(turn.color);
      				var currentCircle=arr[j].id;
      				console.log(arr[j]);
      				var currentClassList=($(this).attr("class").split(/\s+/));
      				if(currentClassList.indexOf(turn.color)!=-1){
      					winningCirclesCounter++;
      					console.log(winningCirclesCounter);
      					if(winningCirclesCounter==4){
      						console.log(turn.name+" WINS!");

      					} //end of inner if statement.
      				} // end of outer if statement.

      				else{
      					break;
      				} //end of else clause.
      			} // end of inner for loop (used to check each circle of the line).
      		} //end of switch case.
      	} //end of switch.
} //End of outer for loop









      	//---------------------------------------------------
      	      		
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