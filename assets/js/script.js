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
        lastSpotPlayed = ''; // clears the variable
        if (playerOnesTurn) {
            playerOnesTurn = false; // makes it player 2s turn
        } else if (!playerOnesTurn) {
            playerOnesTurn = true; // makes it player 1s turn
        }
        checkBingo();
    }
}

function nextSquare() {
    if (nextPlayableLocation) {
        document.getElementById(nextPlayableLocation).classList.remove('playable');
    } else {
        for (var i = 0; i < gameBoard.length; i++) {
            gameBoard[i].classList.remove('playable');
        }
    }
    nextPlayableLocation = lastSpotPlayed.className;
    // console.log(nextPlayableLocation);
    document.getElementById(nextPlayableLocation).classList.add('playable');
}

function checkBingo() {

}