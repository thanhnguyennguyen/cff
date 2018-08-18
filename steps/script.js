const steps = require('./index.js');
// put your execution script here
const num = 5;
for (let i = 0; i < num; i++) {
    console.log(steps(num)[i]);
}
