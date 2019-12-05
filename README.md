# Connect-4
GA's SEI Course Project #1: Connect 4
<div text-align=center><img src="images/logo.png" width=540x height=300px></div>

## Installation
No prior installation is required, the game could be accessed by following this <a href="">link</a>

## Technologies Used
* HTML
* CSS
* Java Script
* jQuery

## How the code works
This section will explain how the code works while the game is being played:
1. The code starts off by creating the game board and wating for the user to click on the "Start" button, Once the player clicks on it, the upper section of the page changes to show the number of the current round and the color for the first player's column will change to indicate that now is their turn to play.
1. Once the player has taken an action and clicked on a circle the game must check if the player's move was valid as there are two cases:
   1. The player clicked on a circle that has the circles positioned beneath it all checked (regardless of the color), then it's a valid move and the chosen circle will be colored by the player's color (by adding the class of his/her color to the circle).
   1. If a player clicked on a circle in a column that dosen't has it's circles marked up to the chosen one, the game will consider it an invalid move and will mark the circle on the lowest row of that column that hasn't been colored before.
1. The player's counter for the number of marked circle will be inremented by 1.
1. The marked circle will no longer be able to be clicked by any player.
1. The turn will be set to the next player, changing the color of the player's coloumn as an indicator of the turn.

The game continues to allow players to mark valid circles and switch turns until any player has a total of 4 marked circles.
* ### Checking for a winner

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


## Video
[![Alt text](https://i9.ytimg.com/vi/tUMmZ1HWM-k/mqdefault.jpg?time=1575515259116&sqp=CNznoe8F&rs=AOn4CLDu6bHAvfU9lGr0UUnzu2k6YiojwA)](https://youtu.be/tUMmZ1HWM-k)

## Screenshots








