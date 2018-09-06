const  {findActualActivationDate, processData} = require('../index.js');
// put your tests here

describe('test processData', () => {
    test('test empty data', () => {
        expect(processData([])).toEqual([]);
    });

    test('test invalid phone number', () => {
        let rawData = [
            {
                PHONE_NUMBER: 'abcxyx', // ignore this record
                ACTIVATION_DATE: '2016-03-01',
                DEACTIVATION_DATE: 'abcxyz'
            }
        ];
    
        expect(processData(rawData)).toEqual([]);
    });

    test('test invalid date', () => {
        let rawData = [
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-03-01',
                DEACTIVATION_DATE: 'abcxyz'
            },
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: 'abcxyz', // invalid activation date, remove it
                DEACTIVATION_DATE: ''
            }
            
        ];
    
        let processedData = {
            0987000001 : [
                {
                    activatation: '2016-01-01',
                    deactivatation: ''
                }
            ]
        };
        expect(JSON.stringify(processData(rawData))).toEqual(JSON.stringify(processedData));
    });

    test('test full-column data', () => {
        let rawData = [
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-03-01',
                DEACTIVATION_DATE: '2016-05-01'
            },
            {
                PHONE_NUMBER: '0987000002',
                ACTIVATION_DATE: '2016-02-01',
                DEACTIVATION_DATE: '2016-03-01'
            },
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-01-01',
                DEACTIVATION_DATE: '2016-03-01'
            }
        ];
    
        let processedData = {
            0987000001:  [
                {
                    activatation: '2016-01-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-03-01',
                    deactivatation: '2016-05-01'
                }
            ],
            0987000002: [
                {
                    activatation: '2016-02-01',
                    deactivatation: '2016-03-01'
                }
            ]
        };
        expect(JSON.stringify(processData(rawData))).toEqual(JSON.stringify(processedData));
    });


    test('test full-column data', () => {
        let rawData = [
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-03-01',
                DEACTIVATION_DATE: '2016-05-01'
            },
            {
                PHONE_NUMBER: '0987000002',
                ACTIVATION_DATE: '2016-02-01',
                DEACTIVATION_DATE: '2016-03-01'
            },
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-01-01',
                DEACTIVATION_DATE: '2016-03-01'
            }
        ];
    
        let processedData = {
            0987000001: [
                {
                    activatation: '2016-01-01',
                    deactivatation: '2016-03-01'
                },
                {
                    activatation: '2016-03-01',
                    deactivatation: '2016-05-01'
                }
            ],
            0987000002:  [
                {
                    activatation: '2016-02-01',
                    deactivatation: '2016-03-01'
                }
            ]
        };
        expect(JSON.stringify(processData(rawData))).toEqual(JSON.stringify(processedData));
    });

    
    test('test data missing DEACTIVATION_DATE ', () => {
        let rawData = [
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-03-01',
                DEACTIVATION_DATE: ''
            },
            {
                PHONE_NUMBER: '0987000002',
                ACTIVATION_DATE: '2016-02-01',
                DEACTIVATION_DATE: ''
            },
            {
                PHONE_NUMBER: '0987000001',
                ACTIVATION_DATE: '2016-01-01',
                DEACTIVATION_DATE: '2016-03-01'
            }
        ];
    
        let processedData = [
            {
                number: '0987000001',
                history: [
                    {
                        activatation: '2016-01-01',
                        deactivatation: '2016-03-01'
                    },
                    {
                        activatation: '2016-03-01',
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
        expect(JSON.stringify(processData(rawData))).toEqual(JSON.stringify(processedData));
    });
});
