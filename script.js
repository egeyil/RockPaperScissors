// computer plays 
let compPlay= "";
const rps = ["rock", "paper", "scissors"]

const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
    console.log("Random Number: " + randomNum);
    let compPlay = rps[randomNum];
    console.log("Computer Hand: " + compPlay); 
    return compPlay;
}

computerPlay();

const playerSelection = () => {
    const playerHand = prompt("Please play your hand; rock, paper or scissors?").toLowerCase();
    console.log("Player Hand: " + playerHand);
    const err = "Please play a valid hand.";
    for (var i = 0; i < rps.length; i++) {
        if (playerHand === rps[i]) {
            return playerHand;
        }
        // else {
        //     alert(err); 
        //     playerSelection(); 
        // }
    }
}

playerSelection();

const checkWinLose = (compPlay, playerHand) => {
    let index = rps.indexOf(compPlay);
    console.log("index of computer hand: " + index);
    if (index === rps.indexOf(playerHand)) {
        alert("It's a tie!");
    } else if (rps.indexOf(playerHand) === rps.indexOf(index + 1)) { //player wins
        playerWins = true; 
        return playerWins;
    } else {
        playerWins = false;
        console.log("else ran.");
        return playerWins;
    }
}

checkWinLose();

const displayWinLose = (playerWins) => {
    let endDisplay = "You have played: " + playerHand + ", the computer have played: " + compPlay;
    if (playerWins == true) {
        const won = "You win!";
        alert(endDisplay + " " + won);
    }
    else if (playerWins == false) {
        const lost = "You lost :(";
        alert(endDisplay + " " + lost);
    }
}

displayWinLose();