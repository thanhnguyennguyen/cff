
const maxDistance = (arr) => {
    // put your code here to address problems
    if (arr.length < 2) {
        return -1;
    }

    // keep the minimum element
    let min = arr[0];
    // keep maxDistanceValue
    let maxDistanceValue = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            continue;
        }
        let distance = (arr[i] - min) ;
        if (distance > maxDistanceValue) {
            maxDistanceValue = distance;
        }
    }
    return maxDistanceValue;
}

module.exports = maxDistance;
