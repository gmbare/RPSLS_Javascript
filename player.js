"user strict";


class player {
    constructor (){
        this.name = 'player';
        this.count = 0;
        this.gestures = {
            //rock
            0:{
                weakness:['paper','spock'],
                strength:['scissors','lizard']
            },
            //paper
            1:{
                weakness:['scissors','lizard'],
                strength:['rock','spock']
            },
            //scissors
            2:{
                weakness:['rock','spock'],
                strength:['paper','lizard']
            },
            //lizard
            3:{
                weakness:['rock','scissors'],
                strength:['spock','paper']
            },
            //spock
            4:{
                weakness:['lizard','paper'],
                strength:['scissors','rock']
            },
        }
        this.hand = this.gestures.rock;
    }
    
    chooseGesture(hand = prompt('')().toLowerCase()){
        this.hand = this.gestures[hand]
    }

}

module.exports = player