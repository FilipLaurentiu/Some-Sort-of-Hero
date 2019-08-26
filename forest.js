const readline = require('readline-sync');
const sleep = require('sleep');

const Villain = require('./villain');
const Hero = require('./hero');


enterInTheForest();

const heroName = getHeroName();
const unknownHero = new Hero(heroName);
const numberOfVillain = Math.floor((Math.random() * 5) + 1);
sleep.sleep(2);

for (let i = 0; i < numberOfVillain; i++) {
    unknownHero.prepare();
    sleep.sleep(3);

    console.log('...walking in the forest...\n');
    sleep.sleep(3);

    if (i % 2 == 0) {
        console.log('Just looking for another greate fight\n');
        sleep.sleep(1);
    }

    let isFakeVillain = searchForVillain();
    while (isFakeVillain) {
        isFakeVillain = searchForVillain();
    }

    const newVillain = new Villain(getVillainName());
    newVillain.prepare();
    const heroWin = fight(newVillain);
    if (!heroWin) {
        console.log('\nEnd of story... not the best hero');
        return;
    } else { // not out of the forest
        console.log(`\n${unknownHero.name}, our brave hero win another fight. What a good hero we have`);
        console.log('Next -> \n');
    }

    console.log('=======================================================================');
}

if (unknownHero.health > 0) {
    console.log(`Congratulation ${heroName}. You'r out of the forest`);
}

function searchForVillain() {
    console.log('Oh no...Look! A new villain');
    sleep.sleep(3);

    const randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber % 3 === 0) {
        console.log("Huh..it was just a leaf. \n");
        sleep.sleep(2);
        return true;
    } else {
        return false;
    }
}

function fight(villain) {
    let isHeroTurn = null;
    let round = 1;
    console.log(`First round\n`);
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
    while (unknownHero.health > 0 && villain.health > 0) {
        console.log(`\n\nRound: ${round}`);
        round++;

        if (round % 3 === 0) {
            console.log('\n ==> Fight goes on! They are both very strong! <==');
        }
        if (round === 20) {
            return unknownHero.health > villain.health; // end game if we have 20 turns
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

function enterInTheForest() {
    console.log('You are right in front of the forest.');
    sleep.sleep(2);
    let answer = '';
    while (answer.toUpperCase() !== 'Y' && answer.toUpperCase() !== 'N') {
        answer = readline.question("You are ready to enter? y/n \n");
    }
    if (answer.toUpperCase() === 'N') {
        console.log('Chicken...');
        process.exit();
    }
}