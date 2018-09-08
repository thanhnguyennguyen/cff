
# Put some descriptions here 
Given a list of at most N = 50,000,000 records (in CSV format), each record describes an usage
period of a specific mobile phone number.
Note that one phone number can occur multiple times in this list, because of 2 reasons:
- This phone number can change from prepaid plan to postpaid plan, or vice versa, at
anytime just by sending an SMS to the operator.
- Or, the owner of this phone number can stop using it, and after 1-2 months, it is reused
by another person.
Also remember that, the reason is not recorded in the data, we just have the phone number and
its activation or deactivation date for a usage period record.
- Activation date is the date that the phone number is started being used by a owner with
a specific plan (prepaid or postpaid).
- Deactivation date is the date that the phone number is stopped being used by a owner
with the registered plan.

Moreover, the records don't need to follow any specific order of time, and the records of
the same number don't need to be consecutive​.
This is an example of the list, given as a CSV file:
PHONE_NUMBER,ACTIVATION_DATE,DEACTIVATION_DATE
0987000001,2016-03-01,2016-05-01
0987000002,2016-02-01,2016-03-01
0987000001,2016-01-01,2016-03-01
0987000001,2016-12-01,
0987000002,2016-03-01,2016-05-01
0987000003,2016-01-01,2016-01-10
0987000001,2016-09-01,2016-12-01
0987000002,2016-05-01,
0987000001,2016-06-01,2016-09-01
In this list, ACTIVATION_DATE and DEACTIVATION_DATE are represented with
YYYY-MM-DD format. DEACTIVATION_DATE may be empty, which means that the phone is
still being used by its current owner.
From the given data, we want to find a list of unique phone numbers together with the actual
activation date when its current owner started using it. Note that what we need is the first
activation date of current owner, not previous owner, and not the date when current owner
changes prepaid/postpaid plans.
For example: The prepaid phone number 0987000001 was used by A from 2016-01-01 to
2016-03-01, then it was changed to postpaid. A continued using it until 2016-05-01 and
stopped using this number. After 1 month, on 2016-06-01, this phone number was reused by B
with prepaid plan. B used it until 2016-09-01 then changed to postpaid, and finally changed
back to prepaid on 2016-12-01 and he's still using it until now. In this case, the actual activation
date of current owner B of 0987000001 that we want to find is 2016-06-01
# Put your solutions here
- Datastructure:
{code}
List of elements, each element includes: transaction history of the phone number

{
    [phone_number]: [
        {
            activation: '2018-09-01',
            deactivation: '2018-10-01'
        },
        {
            activation: '2018-10-01',
            deactivation: '2018-11-01'
        }
    ]
}

{code}
- We try to parse input data to a key-value object
    - Key: phone number
    - Value: transaction list of one phone number

- For each element (each phone number)
    - try to sort the transaction list by activation date
    - Assign actualActivationDate = last activation date in transaction list
    - i = length of transaction list - 1
    - Loop transaction list from the end to the beginning: while (i > 0)
        - if (transaction[i].activation - transaction[i-1].deactivation > 1 month)
            - actualActivationDate = transaction[i].activation
            - exit the loop
        - else 
            i = i - 1
    - append actualActivationDate to result list
- export result list to output file

# How to run the program?
- On your local machine
    - Prerequisite: nodejs 8, npm
    - Steps:
        - Git clone this repository git@github.com:thanhnguyennguyen/hacker.git
        - npm install
        - Update input data in topics/find-actual-activation-date/data/input.csv
        - node topics/find-actual-activation-date/script.js
        - checkout your output in topics/find-actual-activation-date/data/output.csv
    - Run unit tests:
        - npm install -g jest
        - npm test
        - Run tests with coverage: npm run coverage
- Using docker
    - Prerequisite: install docker
    - Steps:
        - pull this image: nguyennguyen/hacker and then start a docker container
        - Update input data in topics/find-actual-activation-date/data/input.csv
        - node topics/find-actual-activation-date/script.js
        - checkout your output in topics/find-actual-activation-date/data/output.csv
    - Run unit tests:
        - npm test
        - Run tests with coverage: npm run coverage
