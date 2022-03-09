"use strict";

const player = require('./player.js');
const prompt = require('prompt-sync')();


class human extends player {
    constructor(name){
        super(name);
    }   

    chooseGesture(player,hand = prompt('')) {
        switch (hand) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
                return (this.hand = this.gestures[hand])
            case 'q':
            case null:
            case 'quit':
                console.log('Thanks for playing!');
                process.exit()
            default:
                console.log("invalid input!")
                console.log(`\n${player.name} : Please choose a hand\n0=Rock\n1=Paper\n2=Scissors\n3=Lizard\n4=Spock\n`)
                return (this.chooseGesture(player));
        }
    }
}

module.exports=human