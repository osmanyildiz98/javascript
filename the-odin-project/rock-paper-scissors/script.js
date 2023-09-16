//& HTML Tags

const title = document.getElementById('game-title');
const container = document.querySelector('.container');
const scoreBoard = document.getElementById('score-board');
const comments = document.getElementById('comments');


//& Game Buttons

const rock = document.createElement('button');
rock.id = 'rock';

const paper = document.createElement('button');
paper.id = 'paper';

const scissors = document.createElement('button');
scissors.id = 'scissors';

//& Score Board

let playerScore = 0;
let computerScore = 0;

const player = document.createElement('p');
player.id = 'player-score';
player.textContent = 'Your Score: ' + playerScore;

const computer = document.createElement('p');
computer.id = 'computer-score';
computer.textContent = 'Computer Score: ' + computerScore;

//& Start The Game 

const start = document.getElementById('start');

function startGame() {
    start.remove();
    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    scoreBoard.appendChild(player);
    scoreBoard.appendChild(computer);
};

start.addEventListener("click", startGame);



//& Computer Game

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    }
    return "scissors"
}

//& Play the game

rock.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    if (computerChoice == 'scissors') {
        comments.textContent = 'You Win! Rock break the Scissors';
        playerScore++;
        player.textContent = 'You: ' + playerScore;
        if (playerScore === 5) {
            gameover('player');
        }
    } else if (computerChoice == 'paper') {
        comments.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
        computer.textContent = 'Computer: ' + computerScore;
        if (computerScore === 5) {
            gameover('computer');
        }
    } else {
        comments.textContent = 'Tie game!'
    }
});

paper.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    if (computerChoice == 'rock') {
        comments.textContent = 'You Win! Paper beats Rock';
        playerScore++;
        player.textContent = 'You: ' + playerScore;
        if (playerScore === 5) {
            gameover('player');
        }
    } else if (computerChoice == 'scissors') {
        comments.textContent = 'You Lose! Scissors cut the Paper';
        computerScore++;
        computer.textContent = 'Computer: ' + computerScore;
        if (computerScore === 5) {
            gameover('computer');
        }
    } else {
        comments.textContent = 'Tie game!'
    }
});

scissors.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    if (computerChoice == 'paper') {
        comments.textContent = 'You Win! Scissors cut the Paper';
        playerScore++;
        player.textContent = 'You: ' + playerScore;
        if (playerScore === 5) {
            gameover('player');
        }
    } else if (computerChoice == 'rock') {
        comments.textContent = 'You Lose! Rock breaks the Scissors';
        computerScore++;
        computer.textContent = 'Computer: ' + computerScore;
        if (computerScore === 5) {
            gameover('computer');
        }
    } else {
        comments.textContent = 'Tie game!'
    }
});

//& Game End

const endGameTitle = document.createElement('h1');
endGameTitle.id = 'end-game-title';
endGameTitle.textContent = 'GAME OVER';

const endGameText = document.createElement('p');
endGameText.id = 'end-game-text';

const playAgainButton = document.createElement('button');
playAgainButton.id = 'play-again-button';
playAgainButton.textContent = 'Play Again';

function gameover(text) {
    if (text == 'player') {
        container.remove();
        scoreBoard.remove();
        comments.remove();
        document.body.appendChild(endGameTitle);
        document.body.appendChild(endGameText);
        endGameText.textContent = 'You Win !';
        document.body.appendChild(playAgainButton);
    } else {
        container.remove();
        scoreBoard.remove();
        comments.remove();
        document.body.appendChild(endGameTitle);
        document.body.appendChild(endGameText);
        endGameText.textContent = 'You Lose !';
        document.body.appendChild(playAgainButton);
    }
}

function playAgain() {
    endGameTitle.remove();
    endGameText.remove();
    playAgainButton.remove();
    document.body.appendChild(container);
    document.body.appendChild(scoreBoard);
    scoreBoard.appendChild(player);
    playerScore = 0;
    player.textContent = 'Your Score: ' + playerScore;
    scoreBoard.appendChild(computer);
    computerScore = 0;
    computer.textContent = 'Computer Score: ' + computerScore;
    document.body.appendChild(comments);
    comments.textContent = ''
}

playAgainButton.addEventListener('click', playAgain)









// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while (playerScore < 5 && computerScore < 5) {

//         let playerChoise = prompt("Rock Paper Scissors ?", " ");
//         let player = playerChoise.toLowerCase();
//         let computer = getComputerChoice();

//         if (player !== computer) {
//             if (player == "rock") {
//                 if (computer == "scissors") {
//                     playerScore++;
//                     console.log("You Win! Rock break the Scissors")
//                 } else {
//                     computerScore++;
//                     console.log("You Lose! Paper beats Rock")
//                 }
//             } else if (player == "paper") {
//                 if (computer == "rock") {
//                     playerScore++;
//                     console.log("You Win! Paper beats Rock")
//                 } else {
//                     computerScore++;
//                     console.log("You Lose! Scissors cut the Paper")
//                 }
//             } else if (player == "scissors") {
//                 if (computer == "paper") {
//                     playerScore++;
//                     console.log("You Win! Scissors cut the Paper")
//                 } else {
//                     computerScore++;
//                     console.log("You Lose! Rock breaks the Scissors")
//                 }
//             }

//         } else {
//             console.log("Tie Game!")
//         }

//     }

//     if (playerScore === 5) {
//         return "You Win!"
//     } else {
//         return "You Lose!"
//     }
// }

