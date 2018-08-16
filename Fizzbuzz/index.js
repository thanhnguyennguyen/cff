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
module.exports = {fizz, buzz, fizzString, buzzString};