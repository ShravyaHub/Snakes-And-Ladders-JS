const START_POSITION = 0;
const NO_PLAY = 1;
const SNAKE = 2;
const LADDER = 3;
const WINNING_POSITION = 100;

let player1IsPlaying = true;
let player1Position = START_POSITION;
let player2Position = START_POSITION;
let dicePlayed = 0;

class SnakesAndLadders {

    startGame = () => {
        while(player1Position < WINNING_POSITION && player2Position < WINNING_POSITION) this.rollDice();
        console.log("Dice was rolled " + dicePlayed + " to win the game!");
        if(player1Position == WINNING_POSITION) return "Player 1 won!";
        else return "Player 2 won!";
    };

    rollDice = () => {
        let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
        return this.options(diceNumber);
    };

    options = (diceNumber) => {
        let options = Math.floor(Math.random() * 10) % 3 + 1;
        switch(options) {
            case NO_PLAY:
                if(player1IsPlaying) {
                    console.log("Player 1 lost a turn, Player is at position " + player1Position);
                    player1IsPlaying = false;
                } else {
                    console.log("Player 2 lost a turn, Player is at position " + player2Position);
                    player1IsPlaying = true;
                }
                break;
            case SNAKE:
                if(player1IsPlaying) {
                    player1Position -= diceNumber;
                    if(player1Position < START_POSITION) player1Position = START_POSITION;
                    console.log("Player 1 landed on a snake, Player is at position " + player1Position);
                    player1IsPlaying = false;
                } else {
                    player2Position -= diceNumber;
                    if(player2Position < START_POSITION) player2Position = START_POSITION;
                    console.log("Player 2 landed on a snake, Player is at position " + player2Position);
                    player1IsPlaying = true;
                }
                    break;
            case LADDER:
                if(player1IsPlaying) {
                    if(player1Position + diceNumber <= WINNING_POSITION) {
                        player1Position += diceNumber;
                        console.log("Player 1 landed on a ladder, Player is at position " + player1Position);
                    } else console.log("Player 1 needs " + (WINNING_POSITION - player1Position) + " to win!");
                    player1IsPlaying = false;
                } else {
                    if(player2Position + diceNumber <= WINNING_POSITION) {
                        player2Position += diceNumber;
                        console.log("Player 2 landed on a ladder, Player is at position " + player2Position);
                    } else console.log("Player 2 needs " + (WINNING_POSITION - player2Position) + " to win!");
                    player1IsPlaying = true;
                }

        }
        dicePlayed++;

    };
}

module.exports = SnakesAndLadders;