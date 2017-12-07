const fs = require('fs');
const inputString = fs.readFileSync('7a.txt', 'utf8');

let lines = inputString.split('\r\n');
topLoop: for (let i in lines) {
    let line = lines[i];
    let parent = line.split(' (')[0];
    innerLoop: for (let j in lines) {
        let oLine = lines[j]
        let childList = oLine.split('-> ')[1];
        if (childList) {
            let children = childList.split(', ')
            if (children.indexOf(parent) > -1) {
                continue topLoop;
            }
        }
    }
    console.log(parent);
}