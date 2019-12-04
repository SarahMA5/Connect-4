       
function createBoard(){

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