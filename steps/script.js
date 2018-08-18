const {steps, steps2} = require('./index.js');
// put your execution script here
const num = 5;
console.log('Solution 1:');
for (let i = 0; i < num; i++) {
    console.log(steps(num)[i]);
}

console.log('Solution 2 (recursion):');
for (let i = 0; i < num; i++) {
    console.log(steps2(num)[i]);
}
