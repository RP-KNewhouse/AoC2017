const checkInt = (int, chars) => {
    for (let k in chars) {
        let int2 = parseInt(chars[k]);
        let remainder = 0;
        if (int === int2)
            continue;
        if (int > int2)
            remainder = int % int2
        else
            remainder = int2 % int
        if (remainder == 0) {
            return int/int2 > 1 ? int/int2 : int2/int;
        }
    }
    return -1;
};

const fs = require('fs');
const inputString = fs.readFileSync('2b.txt', 'utf8');

let rows = inputString.split('\n');
let checksum = 0;
for (let i in rows) {
    let row = rows[i];
    let chars = row.split('\t');

    for (let j in chars) {
        let char = chars[j];
        let int = parseInt(char);

        let result = checkInt(int, chars);
        if (result > -1) {
            checksum += result;
            break;
        }
    }
}
console.log(checksum);

