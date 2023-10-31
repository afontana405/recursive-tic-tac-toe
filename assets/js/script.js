var playerOnesTurn = true;

document.addEventListener("click", function() {
    if (event.target.tagName === 'DIV') {
        playersTurn();
    }
});

function playersTurn() {
    if (playerOnesTurn && event.target.textContent === '') {
        event.target.textContent = 'X';
        playerOnesTurn = false;
    } else if (!playerOnesTurn && event.target.textContent === '') {
        event.target.textContent = 'O';
        playerOnesTurn = true;
    }
    checkBingo();
}

function checkBingo() {

}