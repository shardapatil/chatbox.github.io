import { MongoClient } from "mongodb";

async function insertTodo()
{
    const connstr = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(connstr);
    console.log("Connection Success");

    const db = client.db("webconndb");
    let data = {"message":"Hello sharda"};
    let res = await db.collection("webconn").insertOne(data);
    console.log(res);
    await client.close();
}

insertTodo();