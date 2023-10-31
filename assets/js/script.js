var playerOnesTurn = true;
var lastSpotPlayed; 
var nextPlayableLocation;

document.addEventListener("click", function() {
    if (event.target.tagName === 'DIV') {
        // console.log(event.target.parentElement);
        playersTurn();
    }
});

document.getElementById('submit-btn').addEventListener("click", submitTurn);

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
    nextSquare(); 
    lastSpotPlayed = ''; // clears the variable
    if (playerOnesTurn) {
        playerOnesTurn = false; // makes it player 2s turn
    } else if (!playerOnesTurn) {
        playerOnesTurn = true; // makes it player 1s turn
    }
    checkBingo();
}

function nextSquare() {
    if (nextPlayableLocation) {
        document.getElementById(nextPlayableLocation).classList.remove('playable');
    }
    nextPlayableLocation = lastSpotPlayed.className;
    console.log(nextPlayableLocation);
    document.getElementById(nextPlayableLocation).classList.add('playable');
}

function checkBingo() {

}