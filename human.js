"use strict";

const player = require('./player.js');


class human extends player {
    constructor(){
        super()
        this.name = "Player";
    }   
}

module.exports=human