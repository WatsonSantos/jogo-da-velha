let gameSquareText = document.querySelectorAll('.game-square');
let gamePlayerTime = document.querySelector(".game-player-time");
let indicatorPlayer = document.getElementById('game-player-time-indicator');
let spanplayer1Ponts = document.querySelector('.gamepoints-player1-points');
let spanplayer2Ponts = document.querySelector('.gamepoints-player2-points');
let playerOne = 1;
let player1Ponts = 0;
let player2Ponts = 0;
let playerTwo = 2;
let playerTime = "X";
indicatorPlayer.textContent = playerTime;
let indicatorPlayerAux
let endGameControl = 0;

const colorTextWin = '#0b5742'

const colorTextPalyer1 = '#242b54'
const colorTextPalyer2 = '#f9f9fa'

function playerOneWon() {
    if (gameSquareText[0].textContent === "X" && gameSquareText[1].textContent === "X" && gameSquareText[2].textContent === "X") {
        // alert("Jogador 1 venceu!")
        for (let i = 0; i < 3; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[3].textContent === "X" && gameSquareText[4].textContent === "X" && gameSquareText[5].textContent === "X") {
        for (let i = 3; i < 6; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[6].textContent === "X" && gameSquareText[7].textContent === "X" && gameSquareText[8].textContent === "X") {
        for (let i = 6; i < 9; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[0].textContent === "X" && gameSquareText[3].textContent === "X" && gameSquareText[6].textContent === "X") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 0 || i === 3 || i === 6) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[1].textContent === "X" && gameSquareText[4].textContent === "X" && gameSquareText[7].textContent === "X") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 1 || i === 4 || i === 7) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[2].textContent === "X" && gameSquareText[5].textContent === "X" && gameSquareText[8].textContent === "X") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 2 || i === 5 || i === 8) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[0].textContent === "X" && gameSquareText[4].textContent === "X" && gameSquareText[8].textContent === "X") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 0 || i === 4 || i === 8) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[2].textContent === "X" && gameSquareText[4].textContent === "X" && gameSquareText[6].textContent === "X") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 2 || i === 4 || i === 6) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }

}
function playerTwoWon() {
    if (gameSquareText[0].textContent === "O" && gameSquareText[1].textContent === "O" && gameSquareText[2].textContent === "O") {
        for (let i = 0; i < 3; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[3].textContent === "O" && gameSquareText[4].textContent === "O" && gameSquareText[5].textContent === "O") {
        for (let i = 3; i < 6; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[6].textContent === "O" && gameSquareText[7].textContent === "O" && gameSquareText[8].textContent === "O") {
        for (let i = 6; i < 9; i++) {
            gameSquareText[i].style.color = colorTextWin;
        }
        return true
    }
    if (gameSquareText[0].textContent === "O" && gameSquareText[3].textContent === "O" && gameSquareText[6].textContent === "O") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 0 || i === 3 || i === 6) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[1].textContent === "O" && gameSquareText[4].textContent === "O" && gameSquareText[7].textContent === "O") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 1 || i === 4 || i === 7) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[2].textContent === "O" && gameSquareText[5].textContent === "O" && gameSquareText[8].textContent === "O") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 2 || i === 5 || i === 8) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[0].textContent === "O" && gameSquareText[4].textContent === "O" && gameSquareText[8].textContent === "O") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 0 || i === 4 || i === 8) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
    if (gameSquareText[2].textContent === "O" && gameSquareText[4].textContent === "O" && gameSquareText[6].textContent === "O") {
        for (let i = 0; i < gameSquareText.length; i++) {
            if (i === 2 || i === 4 || i === 6) {
                gameSquareText[i].style.color = colorTextWin;
            }
        }
        return true
    }
}

function same() {
    if (endOfGame() && !playerOneWon() && !playerTwoWon()) {
        return true;
    }
}

function resetplayerIndicator() {
    gamePlayerTime.style.visibility = "hidden";
    indicatorPlayer.style.visibility = "hidden";
}
function startplayerIndicator() {
    gamePlayerTime.style.visibility = "visible";
    indicatorPlayer.style.visibility = "visible";
}

function restartGame() {
    let restartInterval = setTimeout(() => {
        for (let i = 0; i < gameSquareText.length; i++) {
            gameSquareText[i].textContent = ""
        }
        startplayerIndicator();
        endGameControl = 0
    }, 3000)

}

function resetGame() {
    spanplayer1Ponts.textContent = "-"
    spanplayer2Ponts.textContent = "-"
    player1Ponts = 0;
    player2Ponts = 0;
    for (let i = 0; i < gameSquareText.length; i++) {
        gameSquareText[i].textContent = ""
    }
}

function endOfGame() {
    if (endGameControl === gameSquareText.length) {
        return true;
    }
}


function toPlay(i) {
    indicatorPlayerAux = playerTime;
    if (playerTime === "X") {
        gameSquareText[i].style.color = colorTextPalyer1;
        playerIdentify = "X";
        playerTime = "O"
    } else {
        gameSquareText[i].style.color = colorTextPalyer2;
        playerIdentify = "O";
        playerTime = "X";
    }

    gameSquareText[i].textContent = playerIdentify;
    indicatorPlayer.textContent = playerTime;
    endGameControl += 1;
}

for (let i = 0; i < gameSquareText.length; i++) {
    gameSquareText[i].addEventListener('click', () => {
        toPlay(i);
        if (playerOneWon()) {
            alert("Jogador X venceu!");
            player1Ponts += 1;
            resetplayerIndicator()
            restartGame();
            spanplayer1Ponts.textContent = player1Ponts;
            // indicatorPlayer.textContent = indicatorPlayerAux;
        }
        if (playerTwoWon()) {
            alert("Jogador ◯ venceu!");
            player2Ponts += 1;
            resetplayerIndicator()
            restartGame();
            spanplayer2Ponts.textContent = player2Ponts;
            //indicatorPlayer.textContent = indicatorPlayerAux;
        }
        /*
        if (same()) {
            alert("Houve um empate!");
            resetplayerIndicator()
            restartGame();
            //indicatorPlayer.textContent = indicatorPlayerAux;
        }*/

        if (same()) {
            alert("Houve um empate!")
            restartGame();
        }
    })
}

