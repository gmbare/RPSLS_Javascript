"use strict";

const player = require('./player.js');

class computer extends player {
    constructor(name){
        super()
        this.name = name;
        //this.hand = this.chooseGesture((Math.floor(Math.random() * Object.keys(this.gestures).length)).toString());
    }

    chooseGesture(hand){
        let choice = this.gestures;
        hand = Math.floor(Math.random() * 5);
        return this.hand = choice[hand];
    }
}

//let test = new computer;
//test.chooseGesture()
//console.log(test.hand)
module.exports= computer