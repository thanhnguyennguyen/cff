const binarySearch = (l,num, start, end) => {
    // return index of num, -1 if not found
    if (end < start) {
        return -1;
    }
    let mid = parseInt((start + end)/2);
    if (l[mid] === num) {
        return mid;
    } else if (l[mid] > num) {
        return binarySearch(l, num, start, mid - 1);
    }
    return binarySearch(l, num, mid + 1, end);
}

const findOneSubset = (l, n, sum, start = 0) => {
    // put your code here to address problems
    let end = l.length - 1;
    if (n === 1) {
        let index = binarySearch(l, sum, start, end);
        if (index !== -1) {
            return [l[index]];
        }
        return [];
    }

    if (l[start] > sum) {
        return [];
    }
    let subset = findOneSubset(l, n - 1, sum - l[start], start + 1);
    if (subset.length > 0) {
        subset.unshift(l[start]);
        return subset;
    }
    return [];
}

module.exports = findOneSubset;
