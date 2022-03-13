
const Program = () => {
    const rps = ["rock", "paper", "scissors"]


    const computerPlay = () => {
        let randomNum = Math.floor(Math.random() * 3);
        console.log("Random Number: " + randomNum);
        compPlay = rps[randomNum];
        console.log("Computer Hand: " + compPlay); 
        return compPlay;
    }
    
    computerPlay();
    
    const indexOfComp = rps.indexOf(compPlay);
    
    const playerSelection = () => {
        playerHand = prompt("Please play your hand; rock, paper or scissors?").toLowerCase();
        return playerHand;
    }
    playerSelection();
    
    const checkIfValid = (playerHand) => {
        const err = "Please play a valid hand.";
        if (rps.includes(playerHand)) {
            return playerHand;
        }
        else {
            alert(err); 
            playerSelection(); 
        }
    }
    
    checkIfValid(playerHand);

    const playAgain = () => {
        let answer= prompt("Play again? y/n").toLowerCase();
        console.log(answer);
        if (answer == "y") {
            Program();
            return
        } else if (answer == "n"){
            alert("Goodbye.");
            return
        } else {
            alert("Please enter a valid answer.");
            playAgain();
            return
        }
    }
    
    let endDisplay = "You chose " + playerHand + ", the computer chose " + compPlay + " .";
    let playerWins;
    
    const checkWinLose = (indexOfComp, playerHand) => {
        switch (rps.indexOf(playerHand)-indexOfComp) {
            case 0: //tie
                alert(endDisplay + " It's a tie!");
                playAgain();
                break;
            case 1: //player win
                playerWins = true;
                break;
            case -2: //player win
                playerWins = true;
                break;
            default: //player lose
                playerWins = false;
                break;
        }
        return playerWins;
    }
    
    checkWinLose(indexOfComp, playerHand);
    
    const displayWinLose = () => {
        if (playerWins == true) {
            const won = " You win!";
            alert(endDisplay + " " + won);
            return
        } else {
            const lost = " You lost :(";
            alert(endDisplay + " " + lost);
            return
        }
    }
    
    displayWinLose(playerWins);

   
    
    playAgain();
}

Program();

