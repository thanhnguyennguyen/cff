
const find1 = () => {
    // put your code here to address problems
}


const find2 = (list, search, start = 0, end = -1) => {
    end = end === -1 ? list.length - 1 : end;
    // put your code here to address problems
    if (start === end) {
        if (list[start] === search) {
            return start;
        }
        //not found
        return -1;
    }
    let mid = parseInt((end + start) / 2);

    if (list[start] < list[end]) {
        // sorted sublist
        if (list[start] <= search && search <= list[mid]) {
            return find2(list, search, start, mid);
        }
        return find2(list, search, mid + 1, end);
    } else {
        // un-order sublist
        let check = find2(list, search, start, mid);
        if (-1 === check) {
            check = find2(list, search, mid + 1, end)
        }
        return check;
    }

}


module.exports = {find1, find2};
