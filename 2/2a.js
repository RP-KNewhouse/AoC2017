const fs = require('fs');
const inputString = fs.readFileSync('2a.txt', 'utf8');

let rows = inputString.split('\n');
let checksum = 0;
for (let i in rows) {
    let row = rows[i];
    let chars = row.split('\t');
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let j in chars) {
        let char = chars[j];
        let int = parseInt(char);
        if (int > max)   max = int;
        if (int < min)   min = int;
    }

    checksum += max - min;
}
console.log(checksum);
