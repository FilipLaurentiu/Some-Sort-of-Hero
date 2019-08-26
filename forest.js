const readline = require('readline-sync');
const sleep = require('sleep');

const Villain = require('./villain');
const Hero = require('./hero');


console.log('You are right in front of the forest.');
process.slee
let answer = '';
while (answer.toUpperCase() !== 'Y' && answer.toUpperCase() !== 'N') {
    answer = readline.question("You are ready to enter in the forest ? y/n \n");
}
if (answer.toUpperCase() === 'N') {
    console.log('Chicken...');
    process.exit();
}

const heroName = getHeroName();
const unknownHero = new Hero(heroName);
const numberOfVillain = Math.floor((Math.random() * 5) + 1);
sleep.sleep(2);
console.log(`\n${heroName} you are in...\n`);

for (let i = 0; i < numberOfVillain; i++) {
    console.log('walking......');
    sleep.sleep(3);
    console.log('Oh no...Look ! A new villain \n');
    sleep.sleep(1);
    if (isFakeVillain()) {
        i--;
        continue;
    } else {
        const newVillain = new Villain(getVillainName());
        const heroWin = fight(newVillain);
        if (!heroWin) {
            console.log('\nEnd of story... not the best hero');
            return;
        } else if (i != numberOfVillain) { // out of the forest
            console.log(`\n${unknownHero.name}, our brave hero win another fight. What a good hero we have`);
            unknownHero.prepare();
        }
    }
    console.log('=======================================================================');
}

console.log(`Congratulation ${heroName}. You'r out of the forest`);

function isFakeVillain() {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber <= 3) {
        console.log("Huh..it was just a leaf. \n");
        return true;
    } else {
        return false;
    }
}

function fight(villain) {
    let isHeroTurn = null;
    if (unknownHero.speed > villain.speed) {
        unknownHero.attack(villain);
        isHeroTurn = false;
    } else if (unknownHero.speed < villain.speed) {
        villain.attack(unknownHero);
        isHeroTurn = true;
    } else if (unknownHero.luck > villain.luck) {
        unknownHero.attack(villain);
        isHeroTurn = false;
    } else if (unknownHero.luck < villain.luck) {
        villain.attack(unknownHero);
        isHeroTurn = true;
    }

    let round = 0;
    while (unknownHero.health > 0 && villain.health > 0) {
        round++;
        if (round % 3 === 0) {
            console.log('\nRound 4 ! They are both very strong !\n');
        }
        if (isHeroTurn) {
            unknownHero.attack(villain);
        } else {
            villain.attack(unknownHero);
        }
        isHeroTurn = !isHeroTurn;
    }

    return unknownHero.health > 0;
}

function getVillainName() {
    const villainName = ['Task Rabbit', 'Chaos', 'Mayhem', 'Angel Slayer', 'Whitewash', 'Cyclone', 'Oblique',
        'Red Saint', 'Vex', 'Discord', 'Inferno', 'Safari', 'Recluse', 'Moors Stalker', 'Ditch', 'Nashville Psycho',
        'Optic Nerve', 'Blink', 'Shivers', 'Blackout', 'Patch Galactic'];

    const randomIndex = Math.floor((Math.random() * villainName.length) + 1);
    return villainName[randomIndex];
}

function getHeroName() {
    let heroName = '';
    while (heroName === '') {
        heroName = readline.question("Give your hero a name: \n");
    }
    return heroName;
}