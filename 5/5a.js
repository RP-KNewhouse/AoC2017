const fs = require('fs');
const inputString = fs.readFileSync('5a.txt', 'utf8');

let initList = inputString.split("\r\n");
let list = [];
for (let i in initList) {
    list.push(parseInt(initList[i]));
}

let pos = 0;
let count = 0;
while (pos < list.length) {
    list[pos]++;
    pos += list[pos] - 1;
    count++;
}
console.log(count);