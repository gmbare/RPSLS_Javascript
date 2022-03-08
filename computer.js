"use strict";

const player = require('./player.js');

class computer extends player {
    constructor(name = 'computer',count, hand,gestures){
        super(gestures,count)
        this.name = name;
        this.hand = this.chooseGesture(Math.floor(Math.random() * 5));
        //this.hand = this.chooseGesture((Math.floor(Math.random() * Object.keys(this.gestures).length)).toString());
    }
}


module.exports= computer