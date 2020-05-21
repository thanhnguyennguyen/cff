const Stack = require('../index')
const NGE = (arr) => {
    let stack = new Stack(),
        result = {}
    for (let n of arr) {
        if (stack.isEmpty() || n < stack.top()) {
            stack.push(n)
            continue
        }
        while (!stack.isEmpty() && n >= stack.top()) {
            let p = stack.pop()
            result[p] = n
        }
        stack.push(n)
    }

    while (!stack.isEmpty()) {
        result[stack.pop()] = -1
    }
    return result
}
module.exports = NGE;