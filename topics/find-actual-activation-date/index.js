
const expiredPeriod = 30 *24 * 60 * 60 * 1000; // 30 days
/**
 * 
 * @param {Array} data
 * @return {object}
 */
const findActualActivationDate = (data) => {
    // put your code here to address problems
    if (!data || data.length === 0) {
        return {};
    }

    let i = data.length - 1;
    let result = {phone: data[i].phone, actualActivationDate: data[i].activation};
    while(i > 0) {
        if (new Date(data[i].activation) - new Date(data[i-1].deactivation) >= expiredPeriod) {
            result.actualActivationDate = data[i].activation;
            return result;
        }
        i--;
    }
    // actualActivation date is the first activation date
    result.actualActivationDate = data[i].activation;
    return result;
}

/**
 * 
 * @param {Array} data
 * @return {boolean}
 */
const validateData = (data) => {
    if (!data || data.length === 0) {
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
