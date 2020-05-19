# Code For Fun / Code For Food
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/thanhnguyennguyen/cff/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/thanhnguyennguyen/cff/?branch=master)
[![Build Status](https://travis-ci.com/thanhnguyennguyen/cff.svg?branch=master)](https://travis-ci.com/thanhnguyennguyen/cff)
[![codecov](https://codecov.io/gh/thanhnguyennguyen/cff/branch/master/graph/badge.svg)](https://codecov.io/gh/thanhnguyennguyen/cff)[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/nguyennguyen/hacker)](https://cloud.docker.com/repository/docker/nguyennguyen/hacker/general)

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

