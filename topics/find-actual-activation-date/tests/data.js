const testcases = [
    // test case 1: no owner transfer transaction, no renewal transaction
    {
        input: [
            {
                phone: '0987000001',
                activation: '2016-01-01',
                deactivation: ''
            }
        ],
        expected: {
            PHONE_NUMBER: '0987000001',
            REAL_ACTIVATIONDATE: '2016-01-01'
        }
    },
    // test case 2: no owner-transfer transaction, has renewal transactions
    {
        input: [
            {
                phone: '0987000001',
                activation: '2016-01-01',
                deactivation: '2016-03-01'
            },
            {
                phone: '0987000001',
                activation: '2016-03-01',
                deactivation: '2016-05-01'
            }
        ],
        expected: {
            PHONE_NUMBER: '0987000001',
            REAL_ACTIVATIONDATE: '2016-01-01'
        }
    },
    // test case 3: has owner-transfer transactions, NO renewal transaction
    {
        input: [
            {
                phone: '0987000001',
                activation: '2016-01-01',
                deactivation: '2016-03-01'
            },
            {
                phone: '0987000001',
                activation: '2016-04-01',
                deactivation: '2016-05-01'
            }
        ],
        expected: {
            PHONE_NUMBER: '0987000001',
            REAL_ACTIVATIONDATE: '2016-04-01'
        }
    },

    // test case 4: has both owner-transfer transactions and renewal transactions
    {
        input: [
            {
                phone: '0987000001',
                activation: '2016-01-01',
                deactivation: '2016-03-01'
            },
            {
                phone: '0987000001',
                activation: '2016-03-01',
                deactivation: '2016-05-01'
            },
            {
                phone: '0987000001',
                activation: '2016-08-01',
                deactivation: '2016-09-01'
            }
        ],
        expected: {
            PHONE_NUMBER: '0987000001',
            REAL_ACTIVATIONDATE: '2016-08-01'
        }
    }
];

module.exports = testcases;