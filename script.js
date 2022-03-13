// computer plays 
let compPlay;
let index;
const rps = ["rock", "paper", "scissors"]

const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
    console.log("Random Number: " + randomNum);
    compPlay = rps[randomNum];
    console.log("Computer Hand: " + compPlay); 
    console.log("index of computer hand in computerPlay " + rps.indexOf(compPlay));
    return compPlay;
}

computerPlay();

const indexCalc = (compPlay) => {
    let index = rps.indexOf(compPlay);
    return index; 
}

indexCalc(compPlay);

console.log("index of computer hand in global: " + index);

const playerSelection = () => {
    const playerHand = prompt("Please play your hand; rock, paper or scissors?").toLowerCase();
    console.log("Player Hand: " + playerHand);
    const err = "Please play a valid hand.";
    for (var i = 0; i < rps.length; i++) {
        if (playerHand == rps[i]) {
            console.log("Player hand is valid");
            return playerHand;
        }
        // else {
        //     alert(err); 
        //     playerSelection(); 
        // }
    }
}

playerSelection();

const checkWinLose = (index, playerHand) => {

    console.log("index of computer hand in checkWinLose: " + index);
    if (index === rps.indexOf(playerHand)) {
        alert("It's a tie!");
    } else if (rps.indexOf(playerHand) == rps.indexOf(index + 1)) { //player wins
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