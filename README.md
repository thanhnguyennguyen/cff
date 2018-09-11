# hacker
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/thanhnguyennguyen/hacker/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/thanhnguyennguyen/hacker/?branch=master)
[![Build Status](https://travis-ci.com/thanhnguyennguyen/hacker.svg?branch=master)](https://travis-ci.com/thanhnguyennguyen/hacker)
[![codecov](https://codecov.io/gh/thanhnguyennguyen/hacker/branch/master/graph/badge.svg)](https://codecov.io/gh/thanhnguyennguyen/hacker)
# [![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/?repo=https://github.com/thanhnguyennguyen/hacker/)
demonstrating problem solving skill

## Start solving a new problem
<code>npm run solve-problem [problem name]</code>

## Testing: Please never write code without tests
### Install Jest
<code>npm install -g jest</code>
### Run tests
- Run test only <code>jest</code> or <code>npm test</code>
- Run test with coverage <code>jest --coverage</code> or <code>npm run coverage</code>

## Finish addressing a problem
<code>npm run finish [problem name]</code>

## Structure
In topics folder, there are many sub folders. Each tries to solve a problem.
- index.js: contain main logics
- README.md
    - description of problem
    - Solutions
- script.js: invoke main logic function in index.js and console.log to see how it works by your eyes
- test.js: unit tests

