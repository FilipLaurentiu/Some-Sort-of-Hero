const Character = require('./character');

class Hero extends Character {
    constructor(name) {
        super(name);
    }

    prepare() {
        this.health = this.getRandomInteger(70, 100);
        this.strength = this.getRandomInteger(70, 80);
        this.defence = this.getRandomInteger(45, 55);
        this.speed = this.getRandomInteger(40, 50);
        this.luck = this.getRandomInteger(10, 30);
        this.lastResilienceUsed = 0;
        this.showCharacterStatus();
    }

    summon() {
        console.log(`${this.name} the hero has been summon`);
        super.summon();
    }
}

module.exports = Hero;