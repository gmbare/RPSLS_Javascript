"user strict";

const prompt = require('prompt-sync')();

class player {
    constructor(name) {
        this.name = name;
        this.count = 0;
        this.gestures = {
            //rock
            0: {
                name: 'rock',
                weakness: ['paper', 'spock']
            },
            //paper
            1: {
                name: 'paper',
                weakness: ['scissors', 'lizard']
            },
            //scissors
            2: {
                name: 'scissors',
                weakness: ['rock', 'spock']
            },
            //lizard
            3: {
                name: 'lizard',
                weakness: ['rock', 'scissors']
            },
            //spock
            4: {
                name: 'spock',
                weakness: ['lizard', 'paper']
            },
        }
        this.hand = 1;
    }

}

module.exports = player