function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    }
    return "scissors"
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {

        let playerChoise = prompt("Rock Paper Scissors ?", " ");
        let player = playerChoise.toLowerCase();
        let computer = getComputerChoice();

        if (player !== computer) {
            if (player == "rock") {
                if (computer == "scissors") {
                    playerScore++;
                    console.log("You Win! Rock break the Scissors")
                } else {
                    computerScore++;
                    console.log("You Lose! Paper beats Rock")
                }
            } else if (player == "paper") {
                if (computer == "rock") {
                    playerScore++;
                    console.log("You Win! Paper beats Rock")
                } else {
                    computerScore++;
                    console.log("You Lose! Scissors cut the Paper")
                }
            } else if (player == "scissors") {
                if (computer == "paper") {
                    playerScore++;
                    console.log("You Win! Scissors cut the Paper")
                } else {
                    computerScore++;
                    console.log("You Lose! Rock breaks the Scissors")
                }
            }

        } else {
            console.log("Tie Game!")
        }

    }

    if (playerScore === 5) {
        return "You Win!"
    } else {
        return "You Lose!"
    }
}


