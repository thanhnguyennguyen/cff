const  {findActualActivationDate, } = require('../index.js');
// put your tests here
describe('test findActualActivationDate', () => {
    test('empty data', () => {
        expect(findActualActivationDate([])).toEqual([]);
    });

    test('no owner transfer transaction, no renewal transaction', () => {
        let input = {
            '0987000001': [
                {
                    activatation: '2016-01-01',
                    deactivatation: ''
                }
            ],
            '0987000002': [
                {
                    activatation: '2016-02-01',
                    deactivatation: ''
                }
            ]
        };
        let expected = [
            {
                '0987000001': '2016-01-01'
            },
            {
                '0987000002': '2016-02-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

    test('no owner-transfer transaction, has renewal transactions', () => {
        let input = {
            '0987000001': [
                {
                    activatation: '2016-01-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-03-01',
                    deactivatation: '2016-05-01'
                }
            ],
            '0987000002':  [
                {
                    activatation: '2016-02-01',
                    deactivatation: '2016-03-01'
                }
            ]
        };
        let expected = [
            {
                '0987000001': '2016-01-01'
            },
            {
                '0987000002': '2016-02-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

    
    test('has owner-transfer transactions, NO renewal transaction', () => {
        let input = {
            '0987000001': [
                {
                    activatation: '2016-01-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-04-01',
                    deactivatation: '2016-05-01'
                }
            ],
            '0987000002': [
                {
                    activatation: '2016-02-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-05-01',
                    deactivatation: ''
                }
            ]
        };
        let expected = [
            {
                '0987000001': '2016-04-01'
            },
            {
                '0987000002': '2016-05-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

      
    test('has both owner-transfer transactions and renewal transactions', () => {
        let input = {
            '0987000001': [
                {
                    activatation: '2016-01-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-03-01',
                    deactivatation: '2016-05-01'
                },
                {
                    activatation: '2016-08-01',
                    deactivatation: '2016-09-01'
                }
            ],
            '0987000002': [
                {
                    activatation: '2016-02-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-03-01',
                    deactivatation: '2016-05-01'
                },
                {
                    activatation: '2016-08-01',
                    deactivatation: ''
                }
            ]
        };
        let expected = [
            {
                '0987000001': '2016-08-01'
            },
            {
                '0987000002': '2016-08-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });
});
