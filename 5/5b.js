const fs = require('fs');
const inputString = fs.readFileSync('5b.txt', 'utf8');

let initList = inputString.split("\r\n");
let list = [];
for (let i in initList) {
    list.push(parseInt(initList[i]));
}

let pos = 0;
let count = 0;
while (pos < list.length) {
    let val = list[pos];
    if (val >= 3)
        list[pos]--;
    else
        list[pos]++;
    pos += val;
    count++;
}
console.log(count);