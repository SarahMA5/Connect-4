# Connect-4
GA's SEI Course Project #1: Connect 4

<p align="center">
<img src="images/logo.png" ></img> </p>


## Installation
No prior installation is required, the game can be accessed by following this <a href="">link</a>

## Technologies Used
* HTML
* CSS
* Java Script
* jQuery


## Features
* Score tracking (all game result cases).
* Start a new round of the game.
* An announcement message that is used for:
  * Stating the number of the current round.
  * Announcing the game results
* Using different coloring styles to indicate changes in the game, such as telling the players who's turn is now, or announcing the winner.
* Added audio to mimic the sound of clicks and to use the other as a notification in case of winning.

## Other Features
The following features are not functioning perfectly at the moment, but would do with some modification.
* <b>Making the site fully responsive:</b> As it needs to be modified to fit mobiles with bigger screens (and include tablets as well).
* <b>Allowing the players to customize their names</b>

## How the code works
This section will explain how the code works while the game is being played:
1. The code starts off by creating the game board and wating for the user to click on the "Start" button, Once the player clicks on it, the upper section of the page changes to show the number of the current round and the color for the first player's column will change to indicate that now is their turn to play.
1. Once the player has taken an action and clicked on a circle the game must check if the player's move was valid as there are two cases:
   1. The player clicked on a circle that has the circles positioned beneath it all checked (regardless of the color), then it's a valid move and the chosen circle will be colored by the player's color (by adding the class of his/her color to the circle).
   1. If a player clicked on a circle in a column that dosen't has it's circles marked up to the chosen one, the game will consider it an invalid move and will mark the circle on the lowest row of that column that hasn't been colored before.
1. The player's counter for the number of marked circles and the counter for the total circles checked on the game board will be inremented by 1.
1. The marked circle will no longer be able to be clicked by any player.
1. The turn will be set to the next player, changing the color of the player's coloumn as an indicator of the turn.

The game continues to allow players to mark valid circles and switch turns until any player has a total of 4 marked circles.
* ### Checking for a winner
Once any player has marked 4 circles or more, the game will start looking for a winning pattern (by checking the row and column of the last marked circle, the diagonal line will also be included in checking if that specific circle is positioned on it)
If the game founds that all 4 circles on that row, column or diagonal line (if it applies) are marked with the same color of the player:
* Increment the number of rounds won for that playe, change the style of his/her column and update the page.
* Increment the number of lost rounds for the opponent and update the page.
* Update the announcement message.

Otherwise, the game will countinue to check until the total number of marked circles of the board reaches 16 (since it's a 4x4 board), will check again if the game has a winner, if not then it's a tie and an alert should appear announcing that (along with the announcement message on the page itself and the number of rounds ended up with a draw will be updated both in the code and on the page as well.


## Video
[![Alt text](https://i9.ytimg.com/vi/tUMmZ1HWM-k/mqdefault.jpg?time=1575515259116&sqp=CNznoe8F&rs=AOn4CLDu6bHAvfU9lGr0UUnzu2k6YiojwA)](https://youtu.be/tUMmZ1HWM-k)

## Screenshots

<p align="center">
<img align="center" src="images/screenshots/Connect-4 - Screenshot 1.png" width=540x height=300px>
<img align="center" src="images/screenshots/Connect-4 - Screenshot 2.png" width=540x height=300px>
<img align="center" src="images/screenshots/Connect-4 - Screenshot 3.png" width=540x height=300px>
<img align="center" src="images/screenshots/Connect-4 - Screenshot 4.png" width=540x height=300px>
<img align="center" src="images/screenshots/Connect-4 - Screenshot 5.png" width=540x height=300px>

 </p>

## Resources
<a href="https://en.wikipedia.org/wiki/Connect_Four">Connect-4 Wikipedia</a>

<a href="https://github.com/sei-jed-10/W02D04-Jquery">W02D04-jQuery</a>

<a href="https://github.com/sei-jed-10/External-Resources">External-Resources</a>


