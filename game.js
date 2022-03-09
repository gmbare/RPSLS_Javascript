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
const computer = require('./computer.js')


class game {
    constructor() {
        this.playerOne = new human(prompt("Please enter a Name: "));
    }

    playerChoice(player) {
        if (player.name != 'Computer') {
            console.log(`\n${player.name} : Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n`)
            return (player.chooseGesture(player))
        }
        else {
            return (player.chooseGesture())
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
                this.playerOne.count = 0;
                this.playerTwo = new human(prompt('Please enter a Name: '));
                break;
            case '2':
                this.playerOne.count = 0;
                this.playerTwo = new computer('Computer');
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
            console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
            this.playerTwo.hand = this.playerChoice(this.playerTwo)
            console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
            this.round++
            if (this.playerOne.hand.weakness.includes(this.playerTwo.hand.name)) {
                this.playerTwo.count++;
                console.log(`${this.playerOne.name} played ${this.playerOne.hand.name} vs ${this.playerTwo.name}'s ${this.playerTwo.hand.name}\n${this.playerTwo.name} is the winner of round ${this.round}`)
            }
            else if (this.playerTwo.hand.weakness.includes(this.playerOne.hand.name)) {
                this.playerOne.count++;
                console.log(`${this.playerOne.name} played ${this.playerOne.hand.name} vs ${this.playerTwo.name}'s ${this.playerTwo.hand.name}\n${this.playerOne.name} is the winner of round ${this.round}`)
            }
            else {
                console.log(`${this.playerOne.name} played ${this.playerOne.hand.name} vs ${this.playerTwo.name}'s ${this.playerTwo.hand.name}\nRound ${this.round} ends in a tie!`)
            }
        }
        return (this.playerOne.count > this.playerTwo.count ? `${this.playerOne.name} is the Winner` : `${this.playerTwo.name} is the winner`)
    }

    playAgain(){
        console.log('Would you like to play again?\n(Y)es or (N)o')
        this.boolPlayAgain = prompt('')
        return(/^y|^yes/i.test(this.boolPlayAgain)?true:/^n|^no/i.test(this.boolPlayAgain)?false:this.playAgain())
    }

}


module.exports = game