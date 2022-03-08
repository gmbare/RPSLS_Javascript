"use strict";

const player = require('./player.js');

class computer extends player {
    constructor(name = 'computer',hand){
        super(gestures)
        this.name = name;
        this.hand = this.chooseGesture((Math.floor(Math.random() * Object.keys(this.gestures).length)).toString());
        this.count = 0;
    }
}


module.exports= computer