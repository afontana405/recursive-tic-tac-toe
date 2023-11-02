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

// my janky way to check for 3 X's or O's in a row
function checkBingo() {
    var containerEl = lastSpotPlayed.parentElement;
    var tiles = containerEl.children;
    const [tL, tM, tR, mL, mM, mR, bL, bM, bR] = tiles;
    if (tL.innerHTML != '' && tL.innerHTML === tM.innerHTML && tL.innerHTML ===  tR.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (mL.innerHTML != '' && mL.innerHTML === mM.innerHTML && mL.innerHTML ===  mR.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (bL.innerHTML != '' && bL.innerHTML === bM.innerHTML && bL.innerHTML ===  bR.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (tL.innerHTML != '' && tL.innerHTML === mL.innerHTML && tL.innerHTML === bL.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (tM.innerHTML != '' && tM.innerHTML === mM.innerHTML && tM.innerHTML === bM.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (tR.innerHTML != '' && tR.innerHTML === mR.innerHTML && tR.innerHTML === bR.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (tL.innerHTML != '' && tL.innerHTML === mM.innerHTML && tL.innerHTML === bR.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    } else if (tR.innerHTML != '' && tR.innerHTML === mM.innerHTML && tR.innerHTML === bL.innerHTML) {
        displayBingo(containerEl);
        checkMegaBingo();
    }
}

function displayBingo(containerEl) {
    if (playerOnesTurn) {
        containerEl.textContent = 'X'
    } else {
        containerEl.textContent = 'O'
    }
}

// my even jankier way to check for the !!! MEGA BINGO !!!
function checkMegaBingo() {
    const [tL, tM, tR, mL, mM, mR, bL, bM, bR] = allContainers;
    if (mM.textContent === 'X' || tL.textContent === 'O') {
        if (mL.textContent === mM.textContent && mL.textContent ===  mR.textContent) { // middle horizontal bingo
            displayMegaBingo();
        } else if (tM.textContent === mM.textContent && tM.textContent === bM.textContent) { // middle vertical bingo
            displayMegaBingo();
        } else if (tL.textContent === mM.textContent && tL.textContent === bR.textContent) { // diagonal bingo
            displayMegaBingo();
        } else if (tR.textContent === mM.textContent && tR.textContent === bL.textContent) { // diagonal bingo
            displayMegaBingo();
        }
    }
    if (tL.textContent === 'X' || tL.textContent === 'O') {
        if (tL.textContent === tM.textContent && tL.textContent ===  tR.textContent) { // top horizontal bingo
            displayMegaBingo();
        } else if (tL.textContent === mL.textContent && tL.textContent === bL.textContent) { // left vertical bingo
            displayMegaBingo();
        } 
    }
    if (bR.textContent === 'X' || tL.textContent === 'O') {
        if (bL.textContent === bM.textContent && bL.textContent ===  bR.textContent) { // bottom horizontal bingo
            displayMegaBingo();
        } else if (tR.textContent === mR.textContent && tR.textContent === bR.textContent) { // right vertical bingo
            displayMegaBingo();
        } 
    }
}

function displayMegaBingo() {
    if (playerOnesTurn) {
        gameBoard.innerHTML = 'X'
    } else {
        gameBoard.innerHTML = 'O'
    }
}