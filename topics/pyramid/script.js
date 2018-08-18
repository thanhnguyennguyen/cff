const {pyramid, pyramid2} = require('./index.js');
// put your execution script here
const num = 7;
console.log('Iteration solution')
for (let i = 0; i < num; i++) {
    console.log(pyramid(num)[i]);
}


console.log('Recursive solution')
for (let i = 0; i < num; i++) {
    console.log(pyramid2(num)[i]);
}
