const {fizz, buzz, fizzString, buzzString} = require ('./index.js');
let check100FirstNumber = () => {
    for (let i = 0; i < 100; i++) console.log(i + ': ' + fizz(i) + '' + buzz(i));
}