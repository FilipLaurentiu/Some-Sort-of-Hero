class Character {
    constructor(characterName = 'Unknown') {
        this.name = characterName;
        this.summon();
    }

    criticalStrike(defender) {
        this.attack(defender);
        this.attack(defender);
        if (this.getRandomInteger(0, 100) <= 10) {
            this.attack(defender);
            if (this.getRandomInteger(0, 100) <= 1) {
                this.attack(defender);
            }
        }
    }

    resilience() {
        console.log('Not Implemented');
    }

    attack(defender) {
        defender.health -= (this.strength - defender.defence);
    }

    summon() { }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


module.exports = Character;
