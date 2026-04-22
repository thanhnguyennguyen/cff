
const two_sum = (arr, target) => {
    // put your code here to address problems
    let memorized = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (memorized.has(complement)) {
            return [memorized.get(complement), i];
        }
        memorized.set(arr[i], i);
    }
    return [];
}

module.exports = two_sum;
