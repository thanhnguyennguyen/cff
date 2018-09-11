
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/thanhnguyennguyen/hacker/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/thanhnguyennguyen/hacker/?branch=master)
[![Build Status](https://travis-ci.com/thanhnguyennguyen/hacker.svg?branch=master)](https://travis-ci.com/thanhnguyennguyen/hacker)
[![codecov](https://codecov.io/gh/thanhnguyennguyen/hacker/branch/master/graph/badge.svg)](https://codecov.io/gh/thanhnguyennguyen/hacker)
# [![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/?repo=https://github.com/thanhnguyennguyen/hacker/)
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
This is an example of the list, given as a CSV file: <br/>
PHONE_NUMBER,ACTIVATION_DATE,DEACTIVATION_DATE<br/>
0987000001,2016-03-01,2016-05-01<br/>
0987000002,2016-02-01,2016-03-01<br/>
0987000001,2016-01-01,2016-03-01<br/>
0987000001,2016-12-01,<br/>
0987000002,2016-03-01,2016-05-01<br/>
0987000003,2016-01-01,2016-01-10<br/>
0987000001,2016-09-01,2016-12-01<br/>
0987000002,2016-05-01,<br/>
0987000001,2016-06-01,2016-09-01<br/>
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
List of transaction. Each contains: phone number, activation date, deactivation 
date (can be empty)


        [
                {
                        Phone: '09800001',
                        activation: '2018-09-01',
                        deactivation: '2018-10-01'
                },
                {
                        Phone: '09800001',
                        activation: '2018-10-01',
                        deactivation: '2018-11-01'
                }
        ]

-  Validate data and bulk import to database
-  Aggregate transactions by phone number
-  Assume that the last activation (in transaction list of each phone number) 
is the actual activation date
-  Traverse transaction list (from latest to oldest):
    - if the deactivation date of the previous transaction is more than 1 
month older than the activation date of the current one, it means 
that we have an owner-transfer transaction. So the current one is 
first transaction of the latest owner, we should reassign the actual 
activation date by this activation date and stop
    - Otherwise, this is a renewal or update-plan transaction of the 
current owner, we need to continue to find the date they register 
this number

# How to run the program?
- On your local machine
    - Prerequisite: nodejs 8, npm, mongodb
    - Steps:
        - Git clone this repository git@github.com:thanhnguyennguyen/hacker.git
        - npm install
        - Update input data in topics/find-actual-activation-date/data/input.csv
        - start mongodb service
        - node topics/find-actual-activation-date/script.js
        - checkout your output in topics/find-actual-activation-date/data/output.csv
    - Run unit tests:
        - npm install -g jest
        - npm test
        - Run tests with coverage: npm run coverage
        
 Note: if you are not using docker, please update line 7 in script.js
        from "mongodb://mongo:27017/";
        to "mongodb://localhost:27017/";
- Using docker
    - Prerequisite: install docker
    - Steps:
        - pull this github repository git@github.com:thanhnguyennguyen/hacker.git
        - docker compose up
        - Update input data in topics/find-actual-activation-date/data/input.csv
        - node topics/find-actual-activation-date/script.js
        - checkout your output in topics/find-actual-activation-date/data/output.csv
    - Run unit tests:
        - npm test
        - Run tests with coverage: npm run coverage
