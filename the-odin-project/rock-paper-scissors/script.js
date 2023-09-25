//& HTML Tags

const title = document.getElementById('game-title');
const container = document.querySelector('.container');
const scoreBoard = document.getElementById('score-board');
const comments = document.getElementById('comments');
const catSoldier = document.getElementById('cat-soldier')
const monitorSoldier = document.getElementById('monitor-soldier')
const catSound = document.createElement('audio');
const monitorSound = document.createElement('audio');

catSound.src = 'sounds/cat-sound.wav';
monitorSound.src = 'sounds/computer-sound.wav';

catSoldier.addEventListener('click', () => {
    catSound.play();
})

catSoldier.addEventListener('mouseleave', () => {
    catSound.pause();
    catSound.currentTime = 0;
})

monitorSoldier.addEventListener('click', () => {
    monitorSound.play();
})

monitorSoldier.addEventListener('mouseleave', () => {
    monitorSound.pause();
    monitorSound.currentTime = 0;
})

//& Game Buttons

const rock = document.createElement('button');
rock.id = 'rock';

const paper = document.createElement('button');
paper.id = 'paper';

const scissors = document.createElement('button');
scissors.id = 'scissors';

const clickSound = document.createElement('audio');
clickSound.src = 'sounds/click-sound.wav'

//& Score Board

let playerScore = 0;
let computerScore = 0;

const player = document.createElement('p');
player.id = 'player-score';
player.textContent = 'Your Score';

const playerCounter = document.createElement('p');
playerCounter.id = 'player-counter';
playerCounter.textContent = playerScore;

const line = document.createElement('p');
line.id = 'line';
line.textContent = '-'

const computerCounter = document.createElement('p');
computerCounter.id = 'computer-counter';
computerCounter.textContent = computerScore;

const computer = document.createElement('p');
computer.id = 'computer-score';
computer.textContent = 'Computer Score';


//& Start The Game 

const start = document.getElementById('start');

function startGame() {
    start.remove();
    catSoldier.remove();
    monitorSoldier.remove();
    container.style.gap = '10rem';
    container.style.marginTop = '4rem';
    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    scoreBoard.appendChild(player);
    scoreBoard.appendChild(playerCounter);
    scoreBoard.appendChild(line);
    scoreBoard.appendChild(computerCounter);
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

const rockWinScisLose = document.createElement('p');
rockWinScisLose.textContent = 'You Win! Rock break the Scissors';
const rockLosePaperWin = document.createElement('p');
rockLosePaperWin.textContent = 'You Lose! Paper beats Rock';
const paperWinRockLose = document.createElement('p');
paperWinRockLose.textContent = 'You Win! Paper beats Rock';
const paperLoseScisWin = document.createElement('p');
paperLoseScisWin.textContent = 'You Lose! Scissors cut the Paper';
const scisWinPaperLose = document.createElement('p');
scisWinPaperLose.textContent = 'You Win! Scissors cut the Paper';
const sciLoseRockWin = document.createElement('p');
sciLoseRockWin.textContent = 'You Lose! Rock break the Scissors';
const even = document.createElement('p');
even.textContent = 'Tie game!';

rock.addEventListener('click', function () {
    clickSound.play();
    if (comments.hasChildNodes()) {
        comments.removeChild(comments.firstChild);
        let computerChoice = getComputerChoice();
        if (computerChoice == 'scissors') {
            comments.appendChild(rockWinScisLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'paper') {
            comments.appendChild(rockLosePaperWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    } else {
        let computerChoice = getComputerChoice();
        if (computerChoice == 'scissors') {
            comments.appendChild(rockWinScisLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'paper') {
            comments.appendChild(rockLosePaperWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    }

});

paper.addEventListener('click', function () {
    clickSound.play();
    if (comments.hasChildNodes()) {
        comments.removeChild(comments.firstChild);
        let computerChoice = getComputerChoice();
        if (computerChoice == 'rock') {
            comments.appendChild(paperWinRockLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'scissors') {
            comments.appendChild(paperLoseScisWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    } else {
        let computerChoice = getComputerChoice();
        if (computerChoice == 'rock') {
            comments.appendChild(paperWinRockLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'scissors') {
            comments.appendChild(paperLoseScisWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    }

});

scissors.addEventListener('click', function () {
    clickSound.play();
    if (comments.hasChildNodes()) {
        comments.removeChild(comments.firstChild);
        let computerChoice = getComputerChoice();
        if (computerChoice == 'paper') {
            comments.appendChild(scisWinPaperLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'rock') {
            comments.appendChild(sciLoseRockWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    } else {
        let computerChoice = getComputerChoice();
        if (computerChoice == 'paper') {
            comments.appendChild(scisWinPaperLose);
            playerScore++;
            playerCounter.textContent = playerScore;
            if (playerScore === 5) {
                gameover('player');
            }
        } else if (computerChoice == 'rock') {
            comments.appendChild(sciLoseRockWin);
            computerScore++;
            computerCounter.textContent = computerScore;
            if (computerScore === 5) {
                gameover('computer');
            }
        } else {
            comments.appendChild(even);
        }
    }

});

//& Game End

const endGameTitle = document.createElement('h1');
endGameTitle.id = 'end-game-title';
endGameTitle.textContent = 'GAME OVER';

const endGameTextWin = document.createElement('p');
endGameTextWin.id = 'end-game-text-win';
endGameTextWin.textContent = 'You Win!'

const endGameTextLose = document.createElement('p');
endGameTextLose.id = 'end-game-text-lose';
endGameTextLose.textContent = 'You Lose!'

const playAgainButton = document.createElement('button');
playAgainButton.id = 'play-again-button';
playAgainButton.textContent = 'Play Again';

const winnerSound = document.createElement('audio');
winnerSound.src = 'sounds/winner.wav';

const loserSound = document.createElement('audio');
loserSound.src = 'sounds/loser.wav'

function gameover(text) {
    if (text == 'player') {
        container.remove();
        scoreBoard.remove();
        comments.remove();
        winnerSound.play();
        document.body.appendChild(endGameTitle);
        document.body.appendChild(endGameTextWin);
        document.body.appendChild(playAgainButton);
    } else {
        container.remove();
        scoreBoard.remove();
        comments.remove();
        loserSound.play();
        document.body.appendChild(endGameTitle);
        document.body.appendChild(endGameTextLose);
        document.body.appendChild(playAgainButton);
    }
}

function playAgain() {
    endGameTitle.remove();
    endGameTextWin.remove();
    endGameTextLose.remove();
    playAgainButton.remove();
    document.body.appendChild(container);
    document.body.appendChild(scoreBoard);
    scoreBoard.appendChild(player);
    scoreBoard.appendChild(playerCounter);
    playerScore = 0;
    playerCounter.textContent = playerScore;
    scoreBoard.appendChild(line);
    scoreBoard.appendChild(computerCounter);
    computerScore = 0;
    computerCounter.textContent = computerScore;
    scoreBoard.appendChild(computer);
    document.body.appendChild(comments);
    comments.textContent = ''
}

playAgainButton.addEventListener('click', playAgain)

//& Language Buttons

const turkishButton = document.getElementById('turkish-button');

turkishButton.addEventListener('click', () => {
    title.textContent = 'TAŞ KAĞIT MAKAS';
    rockWinScisLose.textContent = 'Kazandın! Taş Makası kırdı';
    rockLosePaperWin.textContent = 'Kaybettin! Kağıt Taşı yendi'
    paperWinRockLose.textContent = 'Kazandın! Kağıt Taşı yendi';
    paperLoseScisWin.textContent = 'Kaybettin! Makas Kağıdı kesti'
    scisWinPaperLose.textContent = 'Kazandın! Makas Kağıdı kesti';
    sciLoseRockWin.textContent = 'Kaybettin! Taş Makası kırdı'
    even.textContent = 'Berabere!';
    player.textContent = 'Senin Skorun';
    computer.textContent = 'Bilgisayarın Skoru';
    start.textContent = 'Oyuna Başla';
    endGameTitle.textContent = 'Oyun Bitti';
    endGameTextWin.textContent = 'Kazandın!';
    endGameTextLose.textContent = 'Kaybettin!';
    playAgainButton.textContent = 'Tekrar Oyna';
})

const englishButton = document.getElementById('english-button');

englishButton.addEventListener('click', () => {
    title.textContent = 'ROCK PAPER SCISSORS';
    rockWinScisLose.textContent = 'You Win! Rock break the Scissors';
    rockLosePaperWin.textContent = 'You Lose! Paper beats Rock'
    paperWinRockLose.textContent = 'You Win! Paper beats Rock';
    paperLoseScisWin.textContent = 'You Lose! Scissors cut the Paper'
    scisWinPaperLose.textContent = 'You Win! Scissors cut the Paper';
    sciLoseRockWin.textContent = 'You Lose! Rock break the Scissors'
    even.textContent = 'Tie game!';
    player.textContent = 'Your Score';
    computer.textContent = 'Computer Score';
    start.textContent = 'Start The Game';
    endGameTitle.textContent = 'Game Over';
    endGameTextWin.textContent = 'You Win!';
    endGameTextLose.textContent = 'You Lose!';
    playAgainButton.textContent = 'Play Again';
})



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

