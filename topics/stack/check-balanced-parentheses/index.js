const Stack = require('../index')
const isBalanced = (s) => {
    let stack = new Stack()
    for (let c of s) {
        switch (c) {
            case ')':
            if (stack.top() !== '(') {
                return false
            } else {
                stack.pop()
            }
            break
            case ']':
            if (stack.top() !== '[') {
                return false
            } else {
                stack.pop()
            }

            break
            case '}':
            if (stack.top() !== '{') {
                return false
            } else {
                stack.pop()
            }

            break
            default:
            stack.push(c)
        }
    }
    if (stack.isEmpty()) {
        return true
    }
    return false
}
module.exports = isBalanced;
