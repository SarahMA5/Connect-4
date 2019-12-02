//Project 1 - Connect 4
//Defining players' objects to hold their game-related information.

//Player 1;

var player1 = {
    name: "player 1",
    color: "red",
    numberOfCirclesClicked: 0, // a counter to keep tracking the number of circles already checked by the player
    //The game should check for winners only if either player have 4 circles or more of the board checked.
    numberOfRoundsWon: 0,
    numberOfRoundsLost: 0,
    nameTag:"player1-name",
    column:"player1"
};


//Player 2;
var player2 = {
    name: "player 2",
    color: "yellow",
    numberOfCirclesClicked: 0,
    numberOfRoundsWon: 0,
    numberOfRoundsLost: 0,
    nameTag:"player2-name",
    column:"player2"
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
    'forth-row', 'forth-column', 'first-diagonal', 'second-diagonal'];

//------------------------------------------------------------------------------------------------------------------------


//Let the first turn of the game be player 1's turn.

function main() { //main function of the game.
    newGame(); //a call to newGame() function that initializes the game board with circles.
    var turn = player1; //By default, give the turn to player 1.
    $(turn.column).addClass("yourTurn");

    $(document).ready(function () {


        //-----------------------------------------------------------------------------------------------------------------------

        // If a player clicked on the name to change it.

        $(".player-name").click(function () {
            var tempName = $(this).text();
            var result = prompt('Please Enter Your Name:\n(You can only change your name once per game)', 'player');
            if (result == null) {
                result = tempName;
                console.log("Previous value= " + result)
            }
            if($(this).attr('id')==player1.nameTag){
            	player1.name=result;
            }
            else{
            	player2.name=result;

            }
            $(this).before("<h2>" + result + "</h2>");
            $(this).remove();
        });

        //----------------------------------------------------------------------------------------------------------------------------
        //When the user clicks on a circle.
        $("[id*='circle-']").click(function () {
            var color = turn.color
            var validMove = validatePlayerMove($(this));
            console.log($(this))
            var currentlyCheckedCircle = $(this);
            if (!(validMove)) {
                currentlyCheckedCircle = $("#" + nearestValidCircle);
            }

            currentlyCheckedCircle.addClass(color);

            $(".announcement").remove();


                 var currentRound=0;
/*
                if(totalRoundsPlayed==0){
                	currentRound=1;
                }
                else{
                	currentRound=totalRoundsPlayed;
                	console.log("Total Rounds "+totalRoundsPlayed)
                }
                */
                
                var winnerString = "<div><p class='announcement'>Round "+totalRoundsPlayed+"</p></div>"
                    //$(".player2").after("<br>")
                $("section").before(winnerString)
            

            //  validatePlayerMove(currentlyCheckedCircle);
            updateCounters();
            console.log(turn.numberOfCirclesClicked);
            console.log(currentlyCheckedCircle.attr('id'));

            currentlyCheckedCircle.off("click"); //Once the circle is checked, the player can no loger interact with it again.
            //if the latest move wasn't valid
            //else{
            //}
            if (turn.numberOfCirclesClicked >= 4) { //if the current player has alredy checked 4 circles or more, check for winning patterns.

                if (checkForAWinningPattern(this)) {
                    console.log(turn.name + " WINS!");
                    $(".circle").off("click");
                    turn.numberOfRoundsWon++;
                    console.log("Player 1 has won: " + player1.numberOfRoundsWon + "\nPlayer 2 has won: " + player2.numberOfRoundsWon + "\nTies: " + numberOfTiedRounds);
                    alert(turn.name + " WINS!");
                    hasWinner = true;
                    totalRoundsPlayed++;
                    updateRoundCounters();
                    var newGameButton = $("<div class='buttonCon'><button> New Game </button></div>");
                    //  $(".main").after("<br>");
                    //  if(totalRoundsPlayed>1){
                    $(".announcement").remove();
                    //totalRoundsPlayed


                    //  }
                    var winnerString = "<div><p class='announcement'>Winner is: " + turn.name + "</p></div>"
                    //$(".player2").after("<br>")
                    $("section").before(winnerString)
                    //  $(winnerString).insertAfter($("section"))


                    $("body").append(newGameButton);
                    //  $( "h2" ).insertAfter( $( ".container" ) );

                    $("button").mouseenter(function () {
                        $("button").addClass('red')
                    });

                    $("button").mouseleave(function () {
                        $("button").removeClass('red')
                    });


                    $("button").click(function () {
                        $("#game-board").empty();
                        main();


                    });
                } //end of if wininng statement
            } //end of if statement

            //-------------------------------------------------------------------------------------------------------------------------

            //-----------------Checking for a draw-------------

            //All circles were checked but nobody won
            if (totalCirclesChecked == 16 && !(hasWinner)) {
                numberOfTiedRounds += 1;
                totalRoundsPlayed++;
                updateRoundCounters();
                alert("It's a tie!");
                //  if(totalRoundsPlayed>1){
                $(".announcement").remove();

/*
                 var currentRound=0;

                if(totalRoundsPlayed==0){
                	currentRound=1;
                }
                else{
                	currentRound=totalRoundsPlayed;
                }
                
                var winnerString = "<div><p class='announcement'>Round "+currentRound+"</p></div>"
                    //$(".player2").after("<br>")
                $("section").before(winnerString)
                //}
                */
                var winnerString = "<P class='announcement'>It's a tie!</p>"
                $(".main").before(winnerString)
                var newGameButton = $("<div class='buttonCon'><button> New Game </button></div>");
                $("body").append(newGameButton);
                $("button").click(function () {
                    $("#game-board").empty();
                    main();


                });

            }
            else {

                switchTurns(); //Give the turn to the other player.
            }
        });

    });


    //-------------------------------------------------------------------------------------------------------------------------

    //switchTurns() function will be used to switch the turns between the two players depending on the current player.

    function switchTurns() {
        if (turn == player1) {
            turn = player2;
        }
        else {
            turn = player1;
        }
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
        }
        else {
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

        $("#game-board").append("<span class='circle first-row first-column first-diagonal' id='circle-1'></span>");
        $("#game-board").append("<span class='circle first-row second-column'id='circle-2'></span>");
        $("#game-board").append("<span class='circle first-row third-column' id='circle-3'></span>");
        $("#game-board").append("<span class='circle first-row forth-column second-diagonal' id='circle-4'></span>");
        $("#game-board").append("<br>");

        $("#game-board").append("<span class='circle second-row first-column' id='circle-5'></span>");
        $("#game-board").append("<span class='circle second-row second-column first-diagonal' id='circle-6'></span>");
        $("#game-board").append("<span class='circle second-row third-column second-diagonal' id='circle-7'></span>");
        $("#game-board").append("<span class='circle second-row forth-column' id='circle-8'></span>");

        $("#game-board").append("<br>");

        $("#game-board").append("<span class='circle third-row first-column' id='circle-9'></span>");
        $("#game-board").append("<span class='circle third-row second-column second-diagonal' id='circle-10'></span>");
        $("#game-board").append("<span class='circle third-row third-column first-diagonal' id='circle-11' ></span>");
        $("#game-board").append("<span class='circle third-row forth-column' id='circle-12'></span>");

        $("#game-board").append("<br>");

        $("#game-board").append("<span class='circle forth-row first-column second-diagonal' id='circle-13'></span>");
        $("#game-board").append("<span class='circle forth-row second-column' id='circle-14'></span>");
        $("#game-board").append("<span class='circle forth-row third-column' id='circle-15'></span>");
        $("#game-board").append("<span class='circle forth-row first-diagonal forth-column' id='circle-16'></span>");

        $(".circle").on("click");
        $("button").remove();

    }

    //-------------------------------------------------------------------------------------------------------------------------

    function updateRoundCounters() {
        console.log("Now inside Counters function")
        if (hasWinner) {
            var winner = getCurrentPlayer();
            if (winner == player1) {
                $("#p1-w-rounds").remove();
                $("#player1-img").after("<p id='p1-w-rounds'>Rounds Won:</p>");
                $("#p1-w-rounds").append(" " + player1.numberOfRoundsWon);

                //Update the counter for the number of rounds lost for the opponent.
                player2.numberOfRoundsLost++;
                $("#p2-l-rounds").remove();
                $("#p2-w-rounds").after("<p id='p2-l-rounds'>Rounds Lost:</p>");
                $("#p2-l-rounds").append(" " + player2.numberOfRoundsLost);

                console.log("Player 1 won case")

            }
            else {
                console.log("Player 2 won case")

                $("#p2-w-rounds").remove();
                $("#player2-img").after("<p id='p2-w-rounds'>Rounds Won:</p>");
                $("#p2-w-rounds").append(" " + player2.numberOfRoundsWon);

                //Update the counter for the number of rounds lost for the opponent.
                player1.numberOfRoundsLost++;
                $("#p1-l-rounds").remove();
                $("#p1-w-rounds").after("<p id='p1-l-rounds'>Rounds Lost:</p>");
                $("#p1-l-rounds").append(" " + player1.numberOfRoundsLost);

            }
        }

        else {
            console.log("Draw case")
            $(".number-of-ties").remove();
            $("#p1-l-rounds").after("<p class='number-of-ties'> Ties:</p>")
            $("#p2-l-rounds").after("<p class='number-of-ties'> Ties:</p>")
            $(".number-of-ties").append(" " + numberOfTiedRounds)

        }
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
                    }
                    else {
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
                //console.log("Classes= "+array[i].class)
                //String currentElementClasses=array[i].classList.toString();
                console.log("found the index " + i);
                return i;
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------

} //End of the main() function.

main();
