/* eslint-disable no-console */
import mongoose from "mongoose";
import "./env.load.js";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterUrl = "cluster-clickcollect.dj0mwfn.mongodb.net";
const DBName = "Marketplace";
const URI = `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority`;

const mongoDBClient = {
  initialize: () => {
    try {
      const client = mongoose.connect(URI);
      client.then(() => console.log(`🟢 Succesfully connected to MongoDB ${DBName} 🧥`));
    } catch (e) {
      console.log(`🔴 MongoDB connection failed: ${e} 🧥`);
    }
  },
};

export default mongoDBClient;
