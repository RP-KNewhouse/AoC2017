const fs = require('fs');
const inputString = fs.readFileSync('4a.txt', 'utf8');

const rows = inputString.split('\r\n');
var validCount = 0;
rowLoop: for (let i in rows) {
    let row = rows[i];
    let words = row.split(' ');
    wordLoop: for (let j in words) {
        let word = words[j];
        if (words.indexOf(word) !== words.lastIndexOf(word)){
            continue rowLoop;
        }
    }
    validCount++;
}
console.log(validCount);