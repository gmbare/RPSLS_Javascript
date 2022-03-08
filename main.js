"use strict";

const game = require('./game.js')
let mainGame = new(game)

console.log(mainGame.chooseGame());
// console.log(`${mainGame.playerChoice(mainGame.playerOne).name} \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
// console.log(`${mainGame.playerChoice(mainGame.playerTwo).name} \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);

// console.log(`${mainGame.playerOne.name} played ${mainGame.playerOne.hand.name}`)
// console.log(`${mainGame.playerTwo.name} played ${mainGame.playerTwo.hand.name}`)

console.log(`\n${mainGame.roundWinner()}`)
