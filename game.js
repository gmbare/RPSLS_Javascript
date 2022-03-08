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


const human = require('./human.js');
const computer = require('./computer.js');


class game {
    constructor() {
        this.playerOne = new human('Player')
        this.playerTwo = new computer('computer')
    }

    playerChoice() {
        console.log("Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n")
        return(`${this.playerOne.name} played ${this.playerOne.chooseGesture().name}`)
    }

    robotChoice(){
        return(`${this.playerTwo.name} played ${this.playerTwo.hand.name}`)
    }

}


module.exports= game