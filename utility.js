const START_POSITION = 0;
const NO_PLAY = 1;
const SNAKE = 2;
const LADDER = 3;
const WINNING_POSITION = 100;

var playerPosition = START_POSITION;
var dicePlayed = 1;

module.exports = {
    startGame: function start() {
        while(playerPosition < 100) playerPosition = rollDice(playerPosition);
        console.log("Dice was rolled " + dicePlayed + " to win the game!")
    }
};

function rollDice(playerPosition) {
    let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    return options(playerPosition, diceNumber);
}

function options(playerPosition, diceNumber) {
    let options = Math.floor(Math.random() * 10) % 3 + 1;
    switch(options) {
        case NO_PLAY:
            console.log("Player lost a turn, Player is at position " + playerPosition);
            break;
        case SNAKE:
            playerPosition -= diceNumber;
            if(playerPosition < 0) playerPosition = 0;
            console.log("Player landed on a snake, Player is at position " + playerPosition);
            break;
        case LADDER:
            if(playerPosition + diceNumber <= WINNING_POSITION) {
                playerPosition += diceNumber;
                console.log("Player landed on a ladder, Player is at position " + playerPosition);
            } else console.log("Player needs " + (WINNING_POSITION - playerPosition) + " to win!");

    }
    dicePlayed++;
    return playerPosition;
}