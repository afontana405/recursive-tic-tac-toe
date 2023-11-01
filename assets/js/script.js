var playerOnesTurn = true;
var lastSpotPlayed; 
var nextPlayableLocation;
var gameBoard = document.getElementsByClassName('box');

window.addEventListener('load', gameStart);

document.addEventListener("click", function() {
    if (event.target.tagName === 'DIV' && event.target.parentElement.parentElement.classList.contains('playable')) {
        // console.log(event.target.parentElement);
        playersTurn();
    }
});

document.getElementById('submit-btn').addEventListener("click", submitTurn);

function gameStart() {
    for (var i = 0; i < gameBoard.length; i++) {
        gameBoard[i].classList.add('playable');
    }
}

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
        nextSquare(); 
        checkBingo();
        lastSpotPlayed = ''; // clears the variable
        if (playerOnesTurn) {
            playerOnesTurn = false; // makes it player 2s turn
        } else if (!playerOnesTurn) {
            playerOnesTurn = true; // makes it player 1s turn
        }
    }
}

function nextSquare() {
    if (nextPlayableLocation) { // removes class of previous playable location
        document.getElementById(nextPlayableLocation).classList.remove('playable');
    } else { // runs only after first move, clears class from every location
        for (var i = 0; i < gameBoard.length; i++) {
            gameBoard[i].classList.remove('playable');
        }
    }
    nextPlayableLocation = lastSpotPlayed.className;
    // console.log(nextPlayableLocation);
    document.getElementById(nextPlayableLocation).classList.add('playable');
}

// my inefficient way to check for 3 X's or O's in a row
function checkBingo() {
    var containerEl = lastSpotPlayed.parentElement;
    var tiles = containerEl.children;
    var [tL, tM, tR, mL, mM, mR, bL, bM, bR] = tiles;
    if (tL.textContent != '' && tL.textContent === tM.textContent && tL.textContent ===  tR.textContent) {
        containerEl.innerHTML = 'X';
    } else if (mL.textContent != '' && mL.textContent === mM.textContent && mL.textContent ===  mR.textContent) {
        containerEl.innerHTML = 'X';
    } else if (bL.textContent != '' && bL.textContent === bM.textContent && bL.textContent ===  bR.textContent) {
        containerEl.innerHTML = 'X';
    } else if (tL.textContent != '' && tL.textContent === mL.textContent && tL.textContent === bL.textContent) {
        containerEl.innerHTML = 'X';
    } else if (tM.textContent != '' && tM.textContent === mM.textContent && tM.textContent === bM.textContent) {
        containerEl.innerHTML = 'X';
    } else if (tR.textContent != '' && tR.textContent === mR.textContent && tR.textContent === bR.textContent) {
        containerEl.innerHTML = 'X';
    } else if (tL.textContent != '' && tL.textContent === mM.textContent && tL.textContent === bR.textContent) {
        containerEl.innerHTML = 'X'; 
    } else if (tR.textContent != '' && tR.textContent === mM.textContent && tR.textContent === bL.textContent) {
        containerEl.innerHTML = 'X';
    }
}