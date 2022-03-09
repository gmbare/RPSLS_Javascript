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
const player = require('./player.js');


class game {
    constructor() {
        this.playerOne = new human('Player 1');
        this.playerTwo = null;
    }

    playerChoice(player) {
        if (player.name === 'Player'){
            console.log(`${player.name} : Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n`)
        }
        return (player.chooseGesture())
        // return(`${player.name} played ${player.chooseGesture().name}`)
    }

    robotChoice() {
        return (`${this.playerTwo.name} played ${this.playerTwo.hand.name}`)
    }

    chooseGame() {
        console.log("Would you like to play against another player or computer?\nSelect 1 for player\nSelect 2 for computer.");
        this.userChoice = prompt("");
        switch (this.userChoice) {
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

    roundWinner() {
        this.round = 0
        while((this.playerOne.count < 2) && (this.playerTwo.count < 2)) {
            this.playerOne.hand = this.playerChoice(this.playerOne)
            this.playerTwo.hand = this.playerChoice(this.playerTwo)
            this.round ++
            if (this.playerOne.hand.weakness.includes(this.playerTwo.hand.name)) {
                this.playerTwo.count++;
                console.log(`\n\nPlayer One chose ${this.playerOne.hand.name}.`);
                console.log(`Player Two chose ${this.playerTwo.hand.name}.\n\n`)
                console.log(`Player Two is the winner of round ${this.round}\n`)
            }
            else if (this.playerTwo.hand.weakness.includes(this.playerOne.hand.name)) {
                this.playerOne.count++;
                console.log(`\n\nPlayer One chose ${this.playerOne.hand.name}.`);
                console.log(`Player Two chose ${this.playerTwo.hand.name}.\n\n`)
                console.log(`Player One is the winner of round ${this.round}\n`)
            }
            else {
                console.log(`\n\nPlayer One chose ${this.playerOne.hand.name}.`);
                console.log(`Player Two chose ${this.playerTwo.hand.name}.\n\n`)
                console.log(`Round ${this.round} ends in a tie\n`)
            }
        }
        return(this.playerOne.count>this.playerTwo.count ? 'Player One is the Winner':'Player Two is the winner')
    }

}


module.exports = game