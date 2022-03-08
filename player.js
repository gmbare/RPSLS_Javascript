"user strict";

const prompt = require('prompt-sync')();

class player {
    constructor (){
        this.name = 'player';
        this.count = 0;
        this.gestures = {
            //rock
            0:{
                name:'rock',
                weakness:['paper','spock']
            },
            //paper
            1:{
                name:'paper',
                weakness:['scissors','lizard']
            },
            //scissors
            2:{
                name:'scissors',
                weakness:['rock','spock']
            },
            //lizard
            3:{
                name:'lizard',
                weakness:['rock','scissors']
            },
            //spock
            4:{
                name:'spock',
                weakness:['lizard','paper']
            },
        }
        this.hand = this.gestures.rock;
    }
    
    chooseGesture(hand = prompt('').toLowerCase()){
        return(this.hand = this.gestures[hand])
    }

}

module.exports = player