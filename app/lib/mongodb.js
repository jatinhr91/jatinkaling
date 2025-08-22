import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your MongoDB connection string to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable so the client is cached
  // across hot reloads (avoids creating too many connections).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
