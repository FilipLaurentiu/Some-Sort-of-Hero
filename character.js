const sleep = require('sleep');

class Character {
    constructor(characterName = 'Unknown') {
        this.name = characterName;
        this.summon();
        this.prepare();
    }

    prepare() {
        this.health = 0;
        this.strength = 0;
        this.defence = 0;
        this.speed = 0;
        this.luck = 0;
        this.lastResilienceUsed = 0;
        this.showCharacterStatus();
    }

    showCharacterStatus() {
        console.log(`\n${this.name} have the following properies:`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Defence: ${this.defence}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Luck: ${this.luck}`);
        console.log('And is ready for a fight \u2694 !\n');
    }

    criticalStrike() {
        let damage = this.strength;
        sleep.sleep(1);
        if (this.getRandomInteger(0, 100) <= 10) {
            console.log('A lucky hit. This shot will take some damage!');
            damage += damage;
            if (this.getRandomInteger(0, 100) <= 1) {
                console.log('Omg...anotther one!');
                damage += damage;
            }
        } else {
            console.log(`No critical strike today for ${this.name}`);
        }
        return damage;
    }

    resilience(damage) {
        if (this.lastResilienceUsed > 1 && this.getRandomInteger(0, 100) <= 20) {
            console.log(`${this.name} use resilience. Luky one!`);
            this.lastResilienceUsed = 0;
            return damage / 2;
        }
        this.lastResilienceUsed++;
        return damage;
    }

    attack(defender) {
        console.log(`\n${this.name} will try to attack...let's see what happen`);
        sleep.sleep(2);
        defender.getDamage(this.criticalStrike() - defender.defence);
    }

    getDamage(damage) {
        if (this.getRandomInteger(0, 100) <= this.luck) {
            console.log(`\nHa ha ! ${this.name} made a move in the right direction and will not take any damage`);
            sleep.sleep(3);
        } else {
            const takenDamage = this.resilience(damage);
            sleep.sleep(3);
            console.log(`${this.name} will take some damage. Amoust ${takenDamage}`);
            sleep.sleep(2);
            this.health -= takenDamage;
            console.log(`${this.name} health: ${this.health > 0 ? this.health : 0}`);
        }
    }

    summon() { }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Character;
