const  {findActualActivationDate, } = require('../index.js');
// put your tests here
describe('test findActualActivationDate', () => {
    test('empty data', () => {
        expect(findActualActivationDate([])).toEqual([]);
    });

    test('no owner transfer transaction, no renewal transaction', () => {
        let input = [
            {
                number: '0987000001',
                history: [
                    {
                        activatation: '2016-01-01',
                        deactivatation: ''
                    }
                ]
            },
            {
                number: '0987000002',
                history: [
                    {
                        activatation: '2016-02-01',
                        deactivatation: ''
                    }
                ]
            }
        ];
        let expected = [
            {
                number: '0987000001',
                actualActivationDate: '2016-01-01'
            },
            {
                number: '0987000002',
                actualActivationDate: '2016-02-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

    test('no owner-transfer transaction, has renewal transactiona', () => {
        let input = [
            {
                number: '0987000001',
                history: [
                    {
                        activatation: '2016-01-01',
                        deactivatation: '2016-03-01'
                    },
                    {
                        activatation: '2016-03-01',
                        deactivatation: '2016-05-01'
                    }
                ]
            },
            {
                number: '0987000002',
                history: [
                    {
                        activatation: '2016-02-01',
                        deactivatation: '2016-03-01'
                    }
                ]
            }
        ];
        let expected = [
            {
                number: '0987000001',
                actualActivationDate: '2016-01-01'
            },
            {
                number: '0987000002',
                actualActivationDate: '2016-02-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

    
    test('has owner-transfer transactions, NO renewal transaction', () => {
        let input = [
            {
                number: '0987000001',
                history: [
                    {
                        activatation: '2016-01-01',
                        deactivatation: '2016-03-01'
                    },
                    {
                        activatation: '2016-04-01',
                        deactivatation: '2016-05-01'
                    }
                ]
            },
            {
                number: '0987000002',
                history: [
                    {
                        activatation: '2016-02-01',
                        deactivatation: '2016-03-01'
                    },
                    {
                        activatation: '2016-05-01',
                        deactivatation: ''
                    }
                ]
            }
        ];
        let expected = [
            {
                number: '0987000001',
                actualActivationDate: '2016-04-01'
            },
            {
                number: '0987000002',
                actualActivationDate: '2016-05-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });

      
    test('has both owner-transfer transactions and renewal transactions', () => {
        let input = [
            {
                number: '0987000001',
                history: [
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
                ]
            },
            {
                number: '0987000002',
                history: [
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
            }
        ];
        let expected = [
            {
                number: '0987000001',
                actualActivationDate: '2016-08-01'
            },
            {
                number: '0987000002',
                actualActivationDate: '2016-08-01'
            }
        ];

        expect(JSON.stringify(findActualActivationDate(input))).toEqual(JSON.stringify(expected));
    });
});
