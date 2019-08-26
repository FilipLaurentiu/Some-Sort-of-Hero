class Character {
    constructor(characterName = 'Unknown') {
        this.name = characterName;
        this.health = 0;
        this.strength = 0;
        this.defence = 0;
        this.speed = 0;
        this.luck = 0;
        this.lastResilienceUsed = 0;
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

    resilience(demage) {
        if (this.lastResilienceUsed > 1 && this.getRandomInteger(0, 100) <= 20) {
            console.log(`${this.name} use resilience. Luky one!`);
            this.lastResilienceUsed = 0;
            return demage / 2;
        }
        this.lastResilienceUsed++;
        return demage;
    }

    attack(defender) {
        defender.getDemage(this.strength - defender.defence);
    }

    getDemage(demage) {
        this.health -= this.resilience(demage);
    }

    summon() { }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Character;
