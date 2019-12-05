//Project 1 - Connect 4
//Defining players' objects to hold their game-related information.

//Player 1;
var player1 = {
    name: "player 1",
    color: "red",
    numberOfCirclesClicked: 0, // a counter to keep tracking the number of circles already checked by the player
    //The game should check for winners only if either player has 4 circles or more of the board checked.
    numberOfRoundsWon: 0,
    numberOfRoundsLost: 0,
    nameTag: "player1-name",
    column: "player1"
};


//Player 2;
var player2 = {
    name: "player 2",
    color: "yellow",
    numberOfCirclesClicked: 0,
    numberOfRoundsWon: 0,
    numberOfRoundsLost: 0,
    nameTag: "player2-name",
    column: "player2"
};


// -------------------------------------------------------------------------------------------------------

//Define nessassery variables.

var totalCirclesChecked = 0; //will use this variable to check for ties.
var numberOfTiedRounds = 0;
var totalRoundsPlayed = 1;
var nearestValidCircle; //Will be used to store a refrence to the nearest uncheckd circle the user has checked.
var hasWinner = false; //a boolean to be used in checking for winnings/ties.

//create an array to hold the names of the classes that defines a win (when circles belonging to those classes are marked with
//the same color).
var winningPatterns = ['first-row', 'first-column', 'second-row', 'second-column', 'third-row', 'third-column',
    'forth-row', 'forth-column', 'first-diagonal', 'second-diagonal'
];

            var audio = new Audio('audio/click.mp3');
var notify = new Audio('audio/notify.mp3');

//------------------------------------------------------------------------------------------------------------------------

function start(){
    createBoard();
    $(".circle").off("click");
   $(".circle").off("hover");
    $(".buttonALike").click(function() {
    $(".circle").on("click");
   $(".circle").on("hover");  
      $(".buttonALike").remove();
      
   main();
    });
}
//Let the first turn of the game be player 1's turn.
function main() { //main function of the game.
    if(totalRoundsPlayed>=2){
    newGame(); //a call to newGame() function that initializes the game board with circles.
}
    updatePage("begin"); //update the announcement paragraph located just over the game board.        
    var turn = player1; //By default, give the turn to player 1.
    $("." + turn.column).addClass("yourTurn"); //adding a color to the player's column who's supposed to play now.

    $(document).ready(function() {

        $('.circle').hover(function() { //when the player hovers over a circle of the board:
            $(this).toggleClass('yourTurn'); //toggle the class "yourTurn" which changes the color of the item.
        });


//-----------------------------------------------------------------------------------------------------------------------

        // If a player clicked on the name to change it.

        $(".player-name").click(function() {
            var tempName = $(this).text();
            var result = prompt('Please Enter Your Name:\n(You can only change your name once per game)', 'player');
            if (result == null) {
                result = tempName;
                console.log("Previous value= " + result)
            }
            if ($(this).attr('id') == player1.nameTag) {
                player1.name = result;
            } else {
                player2.name = result;

            }
            $(this).before("<h2>" + result + "</h2>");
            $(this).remove();
        });

//----------------------------------------------------------------------------------------------------------------------------
       
        //When the user clicks on a circle.
        $("[id*='circle-']").click(function() {
            var color = turn.color
            var validMove = validatePlayerMove($(this));
            console.log("Clicked Circle= " + $(this).attr('id'))
            var currentlyCheckedCircle = $(this);
            if (!(validMove)) {
                currentlyCheckedCircle = $("#" + nearestValidCircle);
            }

            currentlyCheckedCircle.addClass(color); //Mark the circle with the current player's class of color.
            audio.play();
            updateCounters();
            currentlyCheckedCircle.off("click"); //Once the circle is marked, the player can no loger interact with it again.

//--------------------------------------------------------------------------------------------------------------------------

            if (turn.numberOfCirclesClicked >= 4) { //if the current player has alredy checked 4 circles or more, check for winning patterns.

                if (checkForAWinningPattern(this)) { //if a winning pattern was found:
                    $(".circle").off("click"); //Make the board unclickable.
                    turn.numberOfRoundsWon++; //Increment the number of winnings for the player who made that last move.
                    //alert(turn.name + " WINS!");
                    hasWinner = true; //Set the value to true (this will come in handy when checking for a draw later)
                    updateRoundCounters(); //update round counters visible in the page, for both players.
                    updatePage("win"); //update the announcement paragraph of the page.
                    $("."+turn.column).addClass("winner");
                        
                        notify.play();

                } //end of if wininng statement
            } //end of if statement

//-------------------------------------------------------------------------------------------------------------------------

            //In case all circles were checked but nobody won
            if (totalCirclesChecked == 16 && !(hasWinner)) {
                numberOfTiedRounds += 1; //increment the number of rounds with no winners.
                updateRoundCounters(); //update round counters in the page.
                alert("Draw !");
                updatePage("draw"); //update the announcement paragraph of the page.

//-------------------------------------------------------------------------------------------------------------------------

            } else { //if the game dosen't have a winner and not all circles were clicked (not a win or tie case).
                if (!(hasWinner)) {
                    switchTurns(); //Give the turn to the other player.
                }

            }

            $(".buttonCon").click(function() { //if the player clicked on "New Game" button.
                        $("."+turn.column).removeClass("winner");

                $("#game-board").empty(); //clear the game board.
                main(); //call main() function to start again.

            });
        });

    });


    //-------------------------------------------------------------------------------------------------------------------------

    //switchTurns() function will be used to switch the turns between the two players depending on the current player.

    function switchTurns() {
        $("." + turn.column).removeClass("yourTurn");

        if (turn == player1) {
            turn = player2;
        } else {
            turn = player1;
        }
        $("." + turn.column).addClass("yourTurn");

    }


    //-------------------------------------------------------------------------------------------------------------------------

    function updateCounters() {
        getCurrentPlayer().numberOfCirclesClicked++;
        totalCirclesChecked++;
    }

    //-------------------------------------------------------------------------------------------------------------------------

    function getCurrentPlayer() {
        if (turn == player1) {
            return player1;
        } else {
            return player2;
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------

    function checkForAWinningPattern(currentC) {
        for (i = 0; i < winningPatterns.length; i++) {
            var classList = ($(currentC).attr("class").split(/\s+/));
            if (classList.indexOf[winningPatterns[i]] != -1) {
                var arr = document.querySelectorAll("." + winningPatterns[i]);
                console.log("now checking " + winningPatterns[i] + " class")
                var winningCirclesCounter = 0;
                for (j = 0; j < arr.length; j++) {
                    console.log(arr[j].id)
                    var currentCircle = (arr[j].id);
                    console.log($("#" + currentCircle).hasClass(turn.color))
                    var currentClassList = ($("#" + currentCircle).attr("class"));
                    console.log(currentClassList)
                    if (currentClassList.indexOf(turn.color) != -1) {
                        winningCirclesCounter++;
                        if (winningCirclesCounter == 4) {
                            console.log("Winning Pattern= " + winningPatterns[i]);
                            return true;

                        } //end of inner if statement.
                    } // end of outer if statement.
                    else {
                        winningCirclesCounter = 0;
                        break;
                        return false;
                    } //end of else clause.
                } // end of inner for loop (used to check each circle of the line).
            } //end of switch case.
        }

    }

    //-------------------------------------------------------------------------------------------------------------------------


    function newGame() {
        player1.numberOfCirclesClicked = 0;
        player2.numberOfCirclesClicked = 0;
        totalCirclesChecked = 0;
        hasWinner = false;
        //nearestValidCircle = "";
        //$("."+turn.column).removeClass("winner");

        createBoard();

    }

    //-------------------------------------------------------------------------------------------------------------------------

    function updateRoundCounters() {
        console.log("Now inside Counters function")
        if (hasWinner) {
            var winner = getCurrentPlayer();
            var loser;
            if (winner == player1) {
                loser = player2;
            } else {
                loser = player1;
            }
            var winnerID = winner.column[6];
            var loserID = loser.column[6];

            $("#p" + winnerID + "-w-rounds").text("Rounds Won: " + winner.numberOfRoundsWon)

            //Update the counter for the number of rounds lost for the opponent.
            loser.numberOfRoundsLost++;
            $("#p" + loserID + "-l-rounds").text("Rounds Lost: " + loser.numberOfRoundsLost);

        } else {

            $(".number-of-ties").text("Ties: " + numberOfTiedRounds);
        }
        totalRoundsPlayed++;
        console.log("totalRoundsPlayed= "+totalRoundsPlayed)

    }


    //-------------------------------------------------------------------------------------------------------------------------

    function validatePlayerMove(circle) {
        console.log("inside validate function " + circle)
        var troubledRows = ['first-row', 'second-row', 'third-row'];
        var currentCircleID = (circle).attr('id');
        if (circle.hasClass('forth-row')) {
            return true;
        }
        //only check for valid moves if the clicked circle belongs to one of the above mentioned rows.
        for (i = 0; i < troubledRows.length; i++) {
            if (circle.hasClass(troubledRows[i])) {
                var clickedColumn = getCircleColumn(circle);

                //Trying to get the list of circles in the same column.
                var associatedCircles = document.getElementsByClassName(clickedColumn);

                //check every circle prior to the current circle's location.
                var currentIndex = getCurrentCircleIndex(associatedCircles, currentCircleID);
                var counter = 0;
                var maxCounter = 3 - currentIndex
                var smallestIndex = currentIndex + 1;
                for (j = currentIndex + 1; j < associatedCircles.length; j++) {
                    var check = $("#" + (associatedCircles[j].id));
                    if (check.hasClass("red") || check.hasClass("yellow")) {
                        counter++;
                    } else {
                        console.log("SmallestIndexIsNow= " + j)
                        smallestIndex = j;
                    }


                    if (counter == maxCounter) {
                        console.log("valid!");
                        return true;
                    }

                }
            }

        }
        nearestValidCircle = associatedCircles[smallestIndex].id;
        console.log(nearestValidCircle)
        return false;

    } //end of the function

    //-------------------------------------------------------------------------------------------------------------------------

    //Returns which class of columns the current circle belongs to.
    function getCircleColumn(circle) {
        var listOfBoardColumns = ['first-column', 'second-column', 'third-column', 'forth-column'];
        for (i = 0; i < listOfBoardColumns.length; i++) {
            if (circle.hasClass(listOfBoardColumns[i]))
                return listOfBoardColumns[i];
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------

    function getCurrentCircleIndex(array, circle) {
        for (i = 0; i < array.length; i++) {
            console.log(array[i])
            console.log(circle)
            if (array[i].id == circle) {
                return i;
            }
        }
    }
    //---------------------------------------------------------------------------------------

    function updatePage(gameResult) {

        var gameString


        $(".announcement").remove();

        switch (gameResult) {

            case "begin": {

                gameString = "<div><p class='announcement'>Round " + totalRoundsPlayed + "</p></div>"
                break;


            }

            case "win": {

                gameString = "<div><p class='announcement'>Winner is: " + turn.name + "</p></div>"

                break;
            }

            case "draw": {
                var gameString = "<div><P class='announcement'>Draw!</p></div>"

                break;
            }

        }


        $("section").before(gameString);

        if (gameResult == "begin") {
            return;
        }

        $("." + turn.column).removeClass("yourTurn");

        var newGameButton = $("<div><button class='buttonCon'> New Game </button></div>");

        //$("body").append(newGameButton);
        $("footer").before(newGameButton)

    }
    //-------------------------------------------------------------------------------------------------------------------------
} //End of the main() function.

start();