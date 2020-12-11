const START_POSITION = 0;

module.exports = {
    startGame: function start() {
        var playerPosition = START_POSITION;
        return rollDice();
    }
};

function rollDice() {
    let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    return diceNumber;
}