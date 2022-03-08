"use strict";

const player = require('./player.js');


class human extends player {
    constructor(name = 'human',count, hand,gestures){
        super(gestures,hand,count)
        this.name = name;
    }   
}

module.exports=human