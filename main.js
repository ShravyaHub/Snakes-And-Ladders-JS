var readlineSync = require('readline-sync');
var SnakesAndLadders = require('./utility');

let game = new SnakesAndLadders();

readlineSync.question("Welcome to Snakes and Ladders game!");
console.log(game.startGame());