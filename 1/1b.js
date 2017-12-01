const fs = require('fs');
const inputString = fs.readFileSync('1a.txt', 'utf8');

var split = inputString.split('');
let sum = 0;
let half = split.length / 2;
for (let i = 0; i < split.length; i++) {
    let digit = split[i];
    let dist = i+half >= split.length ? half - split.length : half;
    let nextDigit = split[i+dist];
    if (digit === nextDigit) {
        sum += parseInt(digit);
    }
}
console.log(sum);