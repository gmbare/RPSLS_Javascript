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
const player = require('./player.js');
const clear = require('clear');


class game {
    constructor() {
        this.playerOne = new player('Player 1');
    }

    playerChoice(player) {
        if (player.name != 'Computer') {
            console.log(`\n${player.name} : Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n`)
            return (player.chooseGesture(player))
        }
        else {
            return (player.chooseGesture(player,(Math.floor(Math.random() * Object.keys(player.gestures).length)).toString()))
        }
    }

    robotChoice() {
        return (`${this.playerTwo.name} played ${this.playerTwo.hand.name}`)
    }

    chooseGame() {
        console.log("Would you like to play against another player or computer?\nSelect 1 for player\nSelect 2 for computer.");
        this.userChoice = prompt("");
        switch (this.userChoice) {
            case '1':
                this.playerTwo = new player('Player 2');
                break;
            case '2':
                this.playerTwo = new player('Computer');
                break;
            case 'q':
            case null:
            case 'quit':
                console.log('Thanks for playing!');
                process.exit()
            default:
                console.log("Invalid Selection");
                return this.chooseGame();
        }
    }

    roundWinner() {
        this.round = 0
        while ((this.playerOne.count < 2) && (this.playerTwo.count < 2)) {
            this.playerOne.hand = this.playerChoice(this.playerOne)
            clear();
            this.playerTwo.hand = this.playerChoice(this.playerTwo)
            clear();
            this.round++
            if (this.playerOne.hand.weakness.includes(this.playerTwo.hand.name)) {
                this.playerTwo.count++;
                console.log(`${this.playerOne.name} played ${this.playerOne.hand.name} vs ${this.playerTwo.name}'s ${this.playerTwo.hand.name}\nPlayer Two is the winner of round ${this.round}`)
            }
            else if (this.playerTwo.hand.weakness.includes(this.playerOne.hand.name)) {
                this.playerOne.count++;
                console.log(`${this.playerOne.name} played ${this.playerOne.hand.name} vs ${this.playerTwo.name}'s ${this.playerTwo.hand.name}\nPlayer One is the winner of round ${this.round}`)
            }
            else {
                console.log(`Round ${this.round} ends in a tie\n`)
            }
        }
        return (this.playerOne.count > this.playerTwo.count ? 'Player One is the Winner' : 'Player Two is the winner')
    }

    playAgain(){
        console.log('Would you like to play again?\n(Y)es or (N)o')
        this.boolPlayAgain = prompt('')
        return(/^y|^yes/i.test(this.boolPlayAgain))
    }

}


module.exports = game