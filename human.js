"use strict";

const player = require('./player.js');


class human extends player {
    constructor(name = 'human'){
        super(gestures)
        this.name = name;
        this.hand = this.chooseGesture();
        this.count = 0;
    }   
    
    chooseGesture(hand = prompt('')().toLowerCase()){
        this.hand = hand
    }
}

module.exports=human