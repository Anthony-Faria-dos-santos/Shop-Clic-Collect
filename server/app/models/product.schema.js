import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  name: String,
  category: String,
  filter: String,
  price: Number,
}, { collection: "products" });

module.exports = mongoose.model("Product", productSchema);
