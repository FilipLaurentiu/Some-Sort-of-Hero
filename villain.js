const Character = require('./character');

class Villain extends Character {
    constructor(villainName = 'Unknown villain') {
        super(villainName);
    }

    prepare() {
        this.health = this.getRandomInteger(60, 90);
        this.strength = this.getRandomInteger(60, 90);
        this.defence = this.getRandomInteger(40, 60);
        this.speed = this.getRandomInteger(40, 60);
        this.luck = this.getRandomInteger(25, 40);
        this.lastResilienceUsed = 0;
        this.showCharacterStatus();
    }

    summon() {
        console.log(`${this.name} is trying to take down the hero..let's see.`);
        super.summon();
    }
}

module.exports = Villain;