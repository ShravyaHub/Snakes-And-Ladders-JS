var readlineSync = require('readline-sync');
var utility = require('./utility');

readlineSync.question("Welcome to Snakes and Ladders game!");
console.log(utility.startGame());

