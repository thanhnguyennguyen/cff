const  {findActualActivationDate, validateData} = require('../index.js');
// put your tests here

describe('test validateData', () => {
    test('test empty data', () => {
        expect(validateData([])).toEqual(false);
    });
    test('test invalid number', () => {
        expect(validateData(['016abc'])).toEqual(false);
    });
    test('test invalid date', () => {
        expect(validateData(['0980000001', '2018-09-abc'])).toEqual(false);
    });
    test('test valid data, empty deactivation date', () => {
        expect(validateData(['0980000001', '2018-09-01'])).toEqual(true);
    });
    test('test invalid data: activation > deactivation', () => {
        expect(validateData(['0980000001', '2018-09-01', '2018-08-01'])).toEqual(false);
    });
    test('test valid data', () => {
        expect(validateData(['0980000001', '2018-09-01', '2018-10-01'])).toEqual(true);
    });
});
