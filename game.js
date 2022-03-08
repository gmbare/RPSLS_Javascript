"use strict";
/*
Rock crushes Scissors    
Scissors cuts Paper   
Paper covers Rock   
Rock crushes Lizard   
Lizard poisons Spock   
Spock smashes Scissors   
Scissors decapitates Lizard   
Lizard eats Paper   
Paper disproves Spock   
Spock vaporizes Rock   
*/

const prompt = require('prompt-sync')();
const human = require('./human.js');
const computer = require('./computer.js');


let playerOne = new human('Player')
let playerTwo = new computer('computer')


function playerChoice(){
    console.log("Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n")
    console.log(`${playerOne.name} played ${playerOne.chooseGesture().name}`)
}

playerChoice()
console.log(`${playerTwo.name} played ${playerTwo.hand.name}`)

