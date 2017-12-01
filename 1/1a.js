const fs = require('fs');
const inputString = fs.readFileSync('1a.txt', 'utf8');

var split = inputString.split('');
let lastDigit = '';
let sum = 0;
for (let i = 0; i < split.length; i++) {
    let digit = split[i];
    if (digit === lastDigit) {
        sum += parseInt(digit);
    }
    lastDigit = digit;
}
if (split[0] === split[split.length-1]) {
    sum += parseInt(split[0]);
}
console.log(sum);