const median = (sub1, sub2) => {
    // put your code here to address problems
    if (sub1.length === 2) {
        let max = sub1[0];
        if (sub2[0] > max) {
            max = sub2[0];
        }
        let min = sub1[1];
        if (sub2[1] < min) {
            min = sub2[1];
        }
        return parseInt((min + max) / 2);
    }
    let mid1 = parseInt((sub1.length - 1) / 2);
    let mid2 = parseInt((sub2.length - 1) / 2);
    let m1 = sub1[mid1];
    let m2 = sub2[mid2];
    if (m1 === m2) {
        return m1;
    }
    if (m1 > m2) {
        return median(sub1.slice(0, mid1 + 1), sub2.slice(mid2));
    }
    return median(sub1.slice(mid1), sub2.slice(0, mid2 + 1));
}

module.exports = median;