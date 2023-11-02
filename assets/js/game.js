var playerOnesTurn = true;
var lastSpotPlayed; 
var nextPlayableLocation;
var allContainers = document.getElementsByClassName("container");
var gameBoard = document.getElementById('game-board');
var gameBoardTiles = document.getElementsByClassName('box');

// listens for players chosen location
document.addEventListener("click", function() {
    if (event.target.tagName === 'DIV' && event.target.parentElement.parentElement.classList.contains('playable')) {
        playersTurn();
    }
});

document.getElementById('submit-btn').addEventListener("click", submitTurn);

// displays an X or O on players input
function playersTurn() {
    if (lastSpotPlayed) { // makes sure player can only make one move per turn
        lastSpotPlayed.innerHTML = '';
    }
    if (playerOnesTurn && event.target.textContent === '') { // if player ones turn, place an X where they click
        lastSpotPlayed = event.target;
        event.target.textContent = 'X';
    } else if (!playerOnesTurn && event.target.textContent === '') { // if player twos turn, place an O where they click
        lastSpotPlayed = event.target;
        event.target.textContent = 'O';
    }
}

function submitTurn() {
    if (lastSpotPlayed != '') {
        checkBingo();
        nextSquare(); 
        lastSpotPlayed = ''; // clears the variable
        if (playerOnesTurn) {
            playerOnesTurn = false; // makes it player 2s turn
        } else {
            playerOnesTurn = true; // makes it player 1s turn
        }
    }
}

function nextSquare() {
    for (var i = 0; i < gameBoardTiles.length; i++) {
        gameBoardTiles[i].classList.remove('playable');
    }
    nextPlayableLocation = document.getElementById(lastSpotPlayed.className);
    let childEl = nextPlayableLocation.children[0];
    if (childEl.textContent != 'X' && childEl.textContent != 'O') {
        nextPlayableLocation.classList.add('playable');
    } else {
        for (let i = 0; i < gameBoardTiles.length; i++) {
            if (allContainers[i].textContent != 'X' && allContainers[i].textContent != 'O') {
                gameBoardTiles[i].classList.add('playable');
            }
        }
    }
}

// my inefficient way to check for 3 X's or O's in a row
function checkBingo() {
    var containerEl = lastSpotPlayed.parentElement;
    var tiles = containerEl.children;
    const [tL, tM, tR, mL, mM, mR, bL, bM, bR] = tiles;
    if (tL.textContent != '' && tL.textContent === tM.textContent && tL.textContent ===  tR.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (mL.textContent != '' && mL.textContent === mM.textContent && mL.textContent ===  mR.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (bL.textContent != '' && bL.textContent === bM.textContent && bL.textContent ===  bR.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (tL.textContent != '' && tL.textContent === mL.textContent && tL.textContent === bL.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (tM.textContent != '' && tM.textContent === mM.textContent && tM.textContent === bM.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (tR.textContent != '' && tR.textContent === mR.textContent && tR.textContent === bR.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (tL.textContent != '' && tL.textContent === mM.textContent && tL.textContent === bR.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    } else if (tR.textContent != '' && tR.textContent === mM.textContent && tR.textContent === bL.textContent) {
        if (playerOnesTurn) {
            containerEl.textContent = 'X'
        } else {
            containerEl.textContent = 'O'
        }
        checkMegaBingo();
    }
}

// function checkMegaBingo() {
//     const [tL, tM, tR, mL, mM, mR, bL, bM, bR] = allContainers;
//     if (tL.textContent != '' && tL.textContent === tM.textContent && tL.textContent ===  tR.textContent) {
//         displayMegaBingo();
//     } else if (mL.textContent != '' && mL.textContent === mM.textContent && mL.textContent ===  mR.textContent) {
//         displayMegaBingo();
//     } else if (bL.textContent != '' && bL.textContent === bM.textContent && bL.textContent ===  bR.textContent) {
//         displayMegaBingo();
//     } else if (tL.textContent != '' && tL.textContent === mL.textContent && tL.textContent === bL.textContent) {
//         displayMegaBingo();
//     } else if (tM.textContent != '' && tM.textContent === mM.textContent && tM.textContent === bM.textContent) {
//         displayMegaBingo();
//     } else if (tR.textContent != '' && tR.textContent === mR.textContent && tR.textContent === bR.textContent) {
//         displayMegaBingo();
//     } else if (tL.textContent != '' && tL.textContent === mM.textContent && tL.textContent === bR.textContent) {
//         displayMegaBingo();
//     } else if (tR.textContent != '' && tR.textContent === mM.textContent && tR.textContent === bL.textContent) {
//         displayMegaBingo();
//     }
// }

// function displayMegaBingo() {

// }