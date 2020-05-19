const {
    findActualActivationDate,
    validateData
} = require('./index.js');
const inputPath = './data/input.csv';
const outputPath = './data/output.csv';
const databaseName = 'phone';
const transactionCollection = 'transaction';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://mongo:27017/";
const fs = require('fs');
const csv = require('fast-csv');
const stream = fs.createReadStream(inputPath);
const chunk = 1000;

// global cariables
let db;
let chunkData = [];


const openDbConnection = async (url, databaseName) => {
    return await MongoClient.connect(url + databaseName, {
        useNewUrlParser: true
    });
}

const createCollection = async (dbo, collectionName) => {
    await dbo.createCollection(collectionName);
}

const closeDbConnection = (db) => {
    db.close();
}

const insertDataToDb = (dbo) => {
    dbo.collection(transactionCollection).insertMany(chunkData, function(err, res) {
        if (err) {
            console.log('Error at ');
            console.log(chunkData);
            console.log(err);
        }
    });
    // reset chunkData
    chunkData = [];
}

const importData = async (db, dbo, process) => {
    // import CSV data to mongodb by chunk, each chunk 1000 records
    let csvStream = csv()
        .on("data", data => {
            if (validateData(data)) {
                chunkData.push({
                    phone: data[0],
                    activation: data[1],
                    deactivation: data[2]
                });
                if (chunkData.length >= chunk) {
                    insertDataToDb(dbo);
                }
            }
        })
        .on("end", async () => {
            // import the last chunk
            if (chunkData.length > 0) {
                insertDataToDb(dbo);
            }
            console.log("Import: DONE");
            console.log("Processing...");
            await process(db, dbo);
            console.log("Completed!")
        });
    stream.pipe(csvStream);


}

const openWriteStream = (outputPath) => {
    let csvStream = csv.format({
            headers: true
        }),
        writableStream = fs.createWriteStream(outputPath);

    writableStream.on("finish", function() {
        console.log("DONE!");
    });
    csvStream.pipe(writableStream);
    return csvStream;
}

const closeWriteStream = (stream) => {
    stream.end();
}
const exportOutput = (data, stream) => {
    stream.write(data);
}


const process = async (db, dbo) => {
    // get phonenumber list
    let phones;
    phones = await dbo.collection(transactionCollection).distinct("phone");
    if (!phones) {
        return;
    }

    // open writeStream to export output
    let writeStream = openWriteStream(outputPath);
    for (let phone of phones) {
        let transactions, result;
        transactions = await dbo.collection(transactionCollection).find({
            phone: phone
        }).sort({
            activation: 1
        }).toArray();
        if (!transactions) {
            return;
        }
        result = findActualActivationDate(transactions);
        exportOutput(result, writeStream);
    }
    closeDbConnection(db);
    closeWriteStream(writeStream);
}

const main = async () => {
    // setup database connection
    try {
        db = await openDbConnection(url, databaseName);
        let dbo = db.db(databaseName);

        // setup db Collection
        await createCollection(dbo, transactionCollection);

        // clean data
        // dbo.collection(transactionCollection).drop(function(err, delOK) {
        //   if (err) throw err;
        //   if (delOK) console.log("Collection deleted");
        //   db.close();
        // });
        // import data
        importData(db, dbo, process);

    } catch (error) {
        console.log(error);
    }
}

main();