const START_POSITION = 0;
const NO_PLAY = 1;
const SNAKE = 2;
const LADDER = 3;

var playerPosition = START_POSITION;

module.exports = {
    startGame: function start() {
        while(playerPosition < 100) playerPosition = rollDice(playerPosition);
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
        case SNAKE:
            playerPosition -= diceNumber;
            if(playerPosition < 0) playerPosition = 0;
            console.log("Player landed on a snake, Player is at position " + playerPosition);
        case LADDER:
            playerPosition += diceNumber;
            console.log("Player landed on a ladder, Player is at position " + playerPosition);

    }
    return playerPosition;
}