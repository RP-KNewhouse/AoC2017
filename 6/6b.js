const fs = require('fs');
const inputString = fs.readFileSync('6b.txt', 'utf8');

let initBank = inputString.split("\t");
let bank = [];
for (let i in initBank) {
    bank.push(parseInt(initBank[i]));
}

let previousBanks = [];
while (previousBanks.indexOf(JSON.stringify(bank)) === -1) {
    previousBanks.push(JSON.stringify(bank));
    let max = Math.max.apply(Math, bank);
    let index = bank.indexOf(max);
    bank[index] = 0;
    for (let i = 1; i <= max; i++) {
        bank[(index+i)%(bank.length)]++;
    }
}
console.log(previousBanks.length - previousBanks.indexOf(JSON.stringify(bank)));