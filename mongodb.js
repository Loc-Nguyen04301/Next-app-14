import { MongoClient } from "mongodb";

const uri = "mongodb+srv://user:pass@cluster0.kpgvxtc.mongodb.net/dbname";

const client = new MongoClient(uri);

await client.connect();
console.log("CONNECTED");
