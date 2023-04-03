
function renderDice(playerNumber) {
    var imageClass = ".img" + playerNumber
    var randomNumber = Math.floor((Math.random() * 6)+ 1);
    var diceImageFile = "images/dice" + randomNumber + ".png";
    document.querySelector(imageClass).setAttribute("src", diceImageFile);
    return randomNumber
}

var player1Number = renderDice(1)
var player2Number = renderDice(2)

if (player1Number > player2Number) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
} else if (player2Number > player1Number) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector("h1").textContent = "It's a Draw."
}