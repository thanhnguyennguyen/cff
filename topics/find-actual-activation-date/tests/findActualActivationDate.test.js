const  {findActualActivationDate, validateData} = require('../index.js');
const testcases = require('./data.js');
// put your tests here
describe('test findActualActivationDate', () => {
    test('empty data', () => {
        expect(findActualActivationDate([])).toEqual({});
    });

    test('no owner transfer transaction, no renewal transaction', () => {
        expect(JSON.stringify(findActualActivationDate(testcases[0].input))).toEqual(JSON.stringify(testcases[0].expected));
    });

    test('no owner-transfer transaction, has renewal transactions', () => {
        expect(JSON.stringify(findActualActivationDate(testcases[1].input))).toEqual(JSON.stringify(testcases[1].expected));
    });

    
    test('has owner-transfer transactions, NO renewal transaction', () => {
        expect(JSON.stringify(findActualActivationDate(testcases[2].input))).toEqual(JSON.stringify(testcases[2].expected));
    });

      
    test('has both owner-transfer transactions and renewal transactions', () => {
        expect(JSON.stringify(findActualActivationDate(testcases[3].input))).toEqual(JSON.stringify(testcases[3].expected));
    });
});
