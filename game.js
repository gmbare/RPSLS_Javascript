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

const prompt = require('prompt-sync')
const human = require('./human.js');
const computer = require('./computer.js');


class game {
    constructor() {
        this.playerOne = new human('Player')
        this.playerTwo = new computer('Computer')
    }

    playerChoice() {
        console.log("Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n")
        return(`${this.playerOne.name} played ${this.playerOne.chooseGesture().name}`)
    }

    robotChoice(){
        return(`${this.playerTwo.name} played ${this.playerTwo.hand.name}`)
    }

    chooseGame(){
        console.log("Would you like to play against another player or computer?\nSelect 1 for player\nSelect 2 for computer.");
        let userChoice = prompt("");
        switch (userChoice){
            case '1':
                this.playerTwo = new human('Player 2');
                break;
            case '2':
                this.playerTwo = new computer('Computer');
                break;
            default:
                console.log("Invalid Selection");
                return this.chooseGame();
        }
    }

}


module.exports= game