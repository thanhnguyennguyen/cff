const {fizz, buzz, fizzString, buzzString} = require ('./index.js');
for (var i = 0; i <= 100; i++) console.log(i + ': ' + fizz(i) + '' + buzz(i));