

//Defining players' objects to hold their game-related information.

//Player 1;
//we will use the counters below as a condition to start checking for winning.
//The game should check for winners only if either player have 4 circles or more of the board checked.

var player1={name:"player 1",
color: "red",
numberOfCirclesClicked:0, // a counter to keep tracking the number of circles already checked by the player
numberOfRoundsWon:0,
 roundsWon : function() {
   this.numberOfRoundsWon++;
  }};

//Player 2;
var player2={name:"player 2",
color: "yellow",
numberOfCirclesClicked:0,
numberOfRoundsWon:0};

var totalCirclesChecked=0; //will use this variable to check for ties.

var winningPatterns=['first-row','first-column','second-row','second-column','thirs-row','third-column',
'forth-row','forth-column','first-diagonal','second-diagonal'];
//------------------------------------------------------------------------------------------------------------------------


//Let the first turn of the game be player 1's turn.

function main(){
newGame();
var turn=player1;
$(document).ready(function(){
	$("[id*='circle-']").click(function(){
		var color=turn.color
      $(this).addClass(color);
      updateCounters();
      console.log(turn.numberOfCirclesClicked);
      console.log($(this).attr('id'));
     
      $(this).off("click"); //Once the circle is checked, the player can no loger interact with it again.

      if(turn.numberOfCirclesClicked>=4){ //if the current player has alredy checked 4 circles or more, check for winning patterns.

		if(checkForAWinningPattern(this)){
		console.log(turn.name+" WINS!");
      	$(".dot").off("click");
      	turn.numberOfRoundsWon++;
      	console.log("Player 1 has won: "+player1.numberOfRoundsWon+"\nPlayer 2 has won: "+player2.numberOfRoundsWon);
      	alert(turn.name+" WINS!");
      	var newGameButton=$("<br> <button> New Game </button>");
      	$("#container").after(newGameButton);
      	$("button").click(function(){
		$("#game-board").empty();
		main();


		});
		}
 //-----------------------------------------------------





//---------------------------------------------------
      	      		
      } //end of if statement

      if(totalCirclesChecked==16){
      	alert("It's a tie!");
      	var newGameButton=$("<br> <button> New Game </button>");
      	$("#container").after(newGameButton);
      	$("button").click(function(){
		$("#game-board").empty();
		main();


		});

      }
      else{

      switchTurns(); //Give the turn to the other player.
  }
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

function checkForAWinningPattern(currentC){
	for(i=0;i<winningPatterns.length;i++){
	var classList=($(currentC).attr("class").split(/\s+/));
	if(classList.indexOf[winningPatterns[i]]!=-1){
	var arr=document.querySelectorAll("."+winningPatterns[i]);
				console.log("now checking "+winningPatterns[i]+" class")
      			var winningCirclesCounter=0;
      			for(j=0;j<arr.length;j++){
      				console.log(arr[j].id)
      				var currentCircle=(arr[j].id);
      				console.log($("#"+currentCircle).hasClass(turn.color))
      				var currentClassList=($("#"+currentCircle).attr("class"));
      				console.log(currentClassList)
      				if(currentClassList.indexOf(turn.color)!=-1){
      					winningCirclesCounter++;
      					if(winningCirclesCounter==4){
      						console.log("Winning Pattern= "+winningPatterns[i]);
      						return true;

      					} //end of inner if statement.
      				} // end of outer if statement.

      				else{
      					winningCirclesCounter=0;
      					break;
      					return false;
      				} //end of else clause.
      			} // end of inner for loop (used to check each circle of the line).
      		} //end of switch case.
	}



	}

	function newGame(){
		player1.numberOfCirclesClicked=0;
		player2.numberOfCirclesClicked=0;
		totalCirclesChecked=0;

$("#game-board").append("<span class='dot first-row first-column first-diagonal' id='circle-1'></span>");
$("#game-board").append("<span class='dot first-row second-column'id='circle-2'></span>");
$("#game-board").append("<span class='dot first-row third-column' id='circle-3'></span>");
$("#game-board").append("<span class='dot first-row forth-column second-diagonal' id='circle-4'></span>");
$("#game-board").append("<br>");

$("#game-board").append("<span class='dot second-row first-column' id='circle-5'></span>");
$("#game-board").append("<span class='dot second-row second-column first-diagonal' id='circle-6'></span>");
$("#game-board").append("<span class='dot second-row third-column second-diagonal' id='circle-7'></span>");
$("#game-board").append("<span class='dot second-row forth-column' id='circle-8'></span>");

$("#game-board").append("<br>");

$("#game-board").append("<span class='dot third-row first-column' id='circle-9'></span>");
$("#game-board").append("<span class='dot third-row second-column second-diagonal' id='circle-10'></span>");
$("#game-board").append("<span class='dot third-row third-column first-diagonal' id='circle-11' ></span>");
$("#game-board").append("<span class='dot third-row forth-column' id='circle-12'></span>");

$("#game-board").append("<br>");

$("#game-board").append("<span class='dot forth-row first-column second-diagonal' id='circle-13'></span>");
$("#game-board").append("<span class='dot forth-row second-column' id='circle-14'></span>");
$("#game-board").append("<span class='dot forth-row third-column' id='circle-15'></span>");
$("#game-board").append("<span class='dot forth-row first-diagonal forth-column' id='circle-16'></span>");

$(".dot").on("click");
$("button").remove();


	}
}

main();


