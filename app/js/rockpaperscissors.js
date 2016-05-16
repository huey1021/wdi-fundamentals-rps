////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move = "rock")
    return "player chose rock";
    
    if (move = 'scissors')
    return "player chose scissors"
    
    if (move = 'paper')
    return "player chose paper"
}
  
function getComputerMove(move) {
    if (move = "rock")
    return "computer chose rock";
    
    if (move = 'scissors')
    return "computer chose scissors"
    
    if (move = 'paper')
    return "computer chose paper"
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove)
    return "it is a tie";
    
    if (playerMove === "rock")
		    {
		        if (computerMove === "scissor")
		        {
		             return "You win.";
		        } else {
		            return "The computer wins. Try again.";
		        }
		        
		    } else if (playerMove === "paper") {
		        
		        if (computerMove === "rock")
		        {
		             return "You win." ;
		        } else if("scissor") {
		            return "The computer wins. Try again." ;
		        }
		        
		    } else if (playerMove === "scissor") {
		      
		        if (computerMove === "rock")
		        {
		            return "The computer wins. Try again.";
		        }else{
		            return "You win.";
		        }
		    }
		}  

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

