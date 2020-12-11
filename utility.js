const START_POSITION = 0;
const NO_PLAY = 1;
const LADDER = 2;
const SNAKE = 3;

module.exports = {
    startGame: function start() {
        var playerPosition = START_POSITION;
        return rollDice(playerPosition);
    }
};

function rollDice(playerPosition) {
    let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    return options(playerPosition, diceNumber);
}

function options(playerPosition, diceNumber) {
    let options = Math.floor(Math.random() * 10) % 3 + 1;
    switch(options) {
        case 1:
            return "Player lost a turn, Player is at position " + playerPosition;
        case 2:
            playerPosition += diceNumber;
            return "Player landed on a ladder, Player is at position " + playerPosition;
        case 3:
            playerPosition -= diceNumber;
            return "Player landed on a snake, Player is at position " + playerPosition

    }
}