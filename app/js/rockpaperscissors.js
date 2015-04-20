////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
        
    if(playerMove === computerMove) {
        winner == "tie";  
        console.log("You tied, try again.")
    } 
    else if (playerMove === "rock") {
            if(computerMove === "scissors") {
                winner = "player"; 
                console.log("Player wins this round.");
            } else {
                winner = "computer";
                console.log("Computer wins this round.");
            }
    }
    else if (playerMove === "paper") {
            if(computerMove === "rock") {
                winner = "player";
                console.log("Player wins this round.");
            } else {
                winner = "computer";
                console.log("Computer wins this round.");
            }
    }
    else if (playerMove === "scissors") {
            if(computerMove === "rock") {
                winner = "computer";
                console.log("Computer wins this round.");
            } else {
                winner = "player";
                console.log("Player wins this round.");
            }
    }
    
    return winner;
}

////////////////////////////////////////////////////////////////////////

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
 
    while(playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
    
        if (winner === "player") {
            playerWins++;
            console.log('The computer chose: ' + computerMove);
        } 
        else if (winner === "computer") {
            computerWins++;
            console.log('The computer chose: ' + computerMove);
        } 
        
        console.log("Player score: " + playerWins);
        console.log("Computer score: " + computerWins);
        console.log("");
    }
    
    console.log("The victor is: " + (playerWins > computerWins ? "Player!" : "Computer!"));
    console.log("Final Score is: ");
    return [playerWins, computerWins];
}

playToFive();