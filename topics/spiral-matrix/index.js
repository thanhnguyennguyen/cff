
const spiral = (num, val = 1, col = 0, row = 0, horizontal = true, result = [[]]) => {
    // put your code here to address problems
    if (num < 1) return [[]];

    if (!result[row]) result[row] = [];
    result[row][col] = val;
    debugger;
    if (val === Math.pow(num, 2)) {
        return result;
    }
    if (horizontal) {
        if ((col + 1) < num &&  (result[row] === undefined || result[row][(col + 1)] === undefined)) {
            return spiral(num, val + 1, col + 1, row, true, result);
        }
        if ((col - 1) >= 0 &&  (result[row] === undefined || result[row][(col - 1)] === undefined)) {
            return spiral(num, val + 1, col - 1, row, true, result);
        }
        if ((row + 1) < num &&  (result[row + 1] === undefined|| result[row + 1][col] === undefined)) {
            return spiral(num, val + 1, col, row + 1, false, result);
        }
        if ((row - 1) >= 0 &&  (result[row - 1] === undefined|| result[row - 1][col] === undefined)) {
            return spiral(num, val + 1, col, row - 1, false, result);
        }
    } else {
        if ((row + 1) < num &&  (result[row + 1] === undefined|| result[row + 1][col] === undefined)) {
            return spiral(num, val + 1, col, row + 1, false, result);
        }
        if ((row - 1) >= 0 &&  (result[row - 1] === undefined|| result[row - 1][col] === undefined)) {
            return spiral(num, val + 1, col, row - 1, false, result);
        }
        if ((col + 1) < num &&  (result[row] === undefined || result[row][(col + 1)] === undefined)) {
            return spiral(num, val + 1, col + 1, row, true, result);
        }
        if ((col - 1) >= 0 &&  (result[row] === undefined || result[row][(col - 1)] === undefined)) {
            return spiral(num, val + 1, col - 1, row, true, result);
        }

    }
    
}

spiral(3);

module.exports = spiral;
