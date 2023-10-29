import { MongoClient } from "mongodb";

const connstr = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connstr);

async function insertTodo(data)
{
    const db = client.db("webconndb");
    let res = await db.collection("webconn").insertOne(data);
    console.log(res);
    await client.close();
}

//insertTodo();

async function readAllTodo()
{
    const db = client.db("webconndb");
    const todo_collection = db.collection("webconn");
  
    let list = await todo_collection.find().toArray();
    console.log(list);
  
    await client.close();
}

readAllTodo();

export {insertTodo,readAllTodo};