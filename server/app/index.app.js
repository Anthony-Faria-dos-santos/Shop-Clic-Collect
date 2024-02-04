import express from "express";
import cors from "cors";

const app = express();

// API Rest
const product = require("./models/product.schema.js");
app.get('/products', async (req, res) => {
  const products = await product.find();
  try {
    
  } catch (error) {
    
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("🌞 Hello Express!");
});

export default app;
