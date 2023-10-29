//const { MongoClient } = require("mongodb");

import { MongoClient } from "mongodb";

function main()
{
    const connectionString = "mongodb://localhost:27017";

    const client = new MongoClient(connectionString);
    console.log("Connection Success");

    client.close();
}

main();