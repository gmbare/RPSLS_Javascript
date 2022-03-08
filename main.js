"use strict";

const game = require('./game.js')
let mainGame = new(game)

console.log(mainGame.playerChoice())
console.log(mainGame.robotChoice())