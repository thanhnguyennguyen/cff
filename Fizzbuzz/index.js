const fizzString = "fizz";
const buzzString = "buzz";
let fizz = num => {
    if (num % 3 == 0){
        return fizzString;
    }
    return '';
}
let buzz = num => {
    if (num % 5 == 0) {
        return buzzString;
    }
    return '';
}
let check100FirstNumber = () => {
    for (let i = 0; i < 100; i++) console.log(i + ': ' + fizz(i) + '' + buzz(i));
}
module.exports = {fizz, buzz, fizzString, buzzString};