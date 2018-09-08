
const findActualActivationDate = () => {
    // put your code here to address problems
}

/**
 * 
 * @param {object} data
 * @return {boolean}
 */
const validateData = (data) => {
    if (!data) {
        return false;
    }
    let numberRegex = /^\d+$/;
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    let activation = data[1] || ''; // not later than deactivation
    let deactivation = data[2] || ''; // can be empty
    if (deactivation.length) {
        return numberRegex.test(data[0] || '') && dateRegex.test(activation) && dateRegex.test(deactivation) && (deactivation >= activation);
    } else {
        return numberRegex.test(data[0] || '') && dateRegex.test(activation);
    }
}

module.exports = {findActualActivationDate, validateData};
