const fs = require('fs');
const inputString = fs.readFileSync('3a.txt', 'utf8');

const num = parseInt(inputString);
const closestSquare = Math.pow(Math.round(Math.sqrt(num)), 2);
const dist = Math.abs(num - closestSquare);
console.log(dist);