const  {findActualActivationDate, processData} = require('./index.js');
const csv = require('csvtojson');
const csvFilePath = './data/input.csv';
const readFile = async() => {
    console.log('Step 1: Importing is starting....');
    jsonArray = await csv().fromFile(csvFilePath);
    console.log('Step 1: Importing is done');
    return jsonArray; 
}
const start = async() => {
    rawData = await readFile();
    console.log(rawData);
}

let rawData = [];
let processedData = [];

start();