class Hero {
    constructor() {
        this.health = this.getRandomInteger(70, 100);
        this.strength = this.getRandomInteger(70, 80);
        this.defence = this.getRandomInteger(45, 55);
        this.speed = this.getRandomInteger(40, 50);
        this.luck = this.getRandomInteger(10, 30)
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}