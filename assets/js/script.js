var playerOnesTurn = true;
var lastSpotPlayed; 

document.addEventListener("click", function() {
    if (event.target.tagName === 'DIV') {
        // console.log(event.target.parentElement);
        playersTurn();
    }
});

document.getElementById('submit-btn').addEventListener("click", submitTurn);

function playersTurn() {
    if (lastSpotPlayed) {
        lastSpotPlayed.innerHTML = '';
    }
    if (playerOnesTurn && event.target.textContent === '') {
        lastSpotPlayed = event.target;
        event.target.textContent = 'X';
    } else if (!playerOnesTurn && event.target.textContent === '') {
        lastSpotPlayed = event.target;
        event.target.textContent = 'O';
    }
    checkBingo();
}

function submitTurn() {
    lastSpotPlayed = '';
    if (playerOnesTurn) {
        playerOnesTurn = false;
    } else if (!playerOnesTurn) {
        playerOnesTurn = true;
    }
}

function checkBingo() {
console.log(event.target.className)
}