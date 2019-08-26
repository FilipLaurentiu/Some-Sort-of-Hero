const Character = require('./character');

class Villain extends Character {
    constructor() {
        super();
        this.health = this.getRandomInteger(60, 90);
        this.strength = this.getRandomInteger(60, 90);
        this.defence = this.getRandomInteger(40, 60);
        this.speed = this.getRandomInteger(40, 60);
        this.luck = this.getRandomInteger(25, 40);
    }

    summon() {
        console.log("A new villain is trying to take down the hero..let's see.")
    }
}
module.exports = Villain;