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

    criticalStrike() {
        let demage = this.strength;
        if (this.getRandomInteger(0, 100) <= 10) {
            console.log('A lucky hit. This shot will take some demage !');
            demage += demage;
            if (this.getRandomInteger(0, 100) <= 1) {
                console.log('Omg...anotther one! ');
                demage += demage;
            }
        } else {
            console.log(`No critical strike today for ${this.name}`);
        }
        return demage;
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
        defender.getDemage(this.criticalStrike() - defender.defence);
    }

    getDemage(demage) {
        const takenDemage = this.resilience(demage);
        console.log(`${this.name} will take some demage. Amoust ${takenDemage}`);
        this.health -= takenDemage;
    }

    summon() { }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Character;
