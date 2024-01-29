import { createServer } from "node:http";
import "./app/helpers/env.load.js";
import mongoose from "mongoose";
import expressApp from "./app/index.app.js";

const httpServer = createServer(expressApp);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected!"));

httpServer.listen(PORT, () => {
  console.log(`🟢 Server running on : http://localhost:${PORT}🌞`);
});
