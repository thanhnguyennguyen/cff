const Stack = require('../index.js');
const operators = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
}
const PrefixToPostfix = (formula) => {
    let result = ""
    let stack = new Stack()
    for (let i = formula.length - 1 ; i>= 0; i--) {
        let c = formula[i]
        if (!operators[c]) {
            stack.push(c)
            continue
        }
	    let subFormula = stack.pop() + stack.pop() + c
		     stack.push(subFormula)
    }
    return stack.pop()
}
module.exports = PrefixToPostfix

