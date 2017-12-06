const fs = require('fs');
const inputString = fs.readFileSync('4b.txt', 'utf8');

const rows = inputString.split('\r\n');
var validCount = 0;
rowLoop: for (let i in rows) {
    let row = rows[i];
    let words = row.split(' ');
    wordLoop: for (let j in words) {
        let word = words[j];
        let sortedWord = word.split("").sort().join("");
        innerWordLoop: for (let k = parseInt(j)+1; k < words.length; k++) {
            let oWord = words[k];
            let oSortedWord = oWord.split("").sort().join("");
            if (sortedWord === oSortedWord)
                continue rowLoop; 
        }
    }
    validCount++;
}
console.log(validCount);