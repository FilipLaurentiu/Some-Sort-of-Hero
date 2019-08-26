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

