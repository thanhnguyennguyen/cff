
const find = (list, search, start = 0, end = -1) => {
    if (end === -1) {
        end = list.length - 1;
    } 
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
            return find(list, search, start, mid);
        }
        return find(list, search, mid + 1, end);
    }
    // un-order sublist
    let check = find(list, search, start, mid);
    if (-1 === check) {
        check = find(list, search, mid + 1, end)
    }
    return check;

}


module.exports = find;
