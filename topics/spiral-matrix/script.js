const spiral = require('./index.js');
// put your execution script here

const num = 2;
const result = spiral(num);

console.log('spiral ' + num);
for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num; j++) row.push(result[i][j]);
    console.log(row.join(' '))
}
