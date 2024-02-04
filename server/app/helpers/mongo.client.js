/* eslint-disable no-console */
import "./env.load.js";
import mongoose from "mongoose";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterUrl = "cluster-clickcollect.dj0mwfn.mongodb.net";
const DBName = "Marketplace";
const URI = `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority`;

const mongoDBClient = {
  initialize: () => mongoose.connect(URI)
    .then(() => console.log(`🟢 Successfully connected to MongoDB ${DBName} 🧥`))
    .catch((e) => console.log(`🔴 MongoDB connection failed: ${e} 🧥`)),
};

export default mongoDBClient;
