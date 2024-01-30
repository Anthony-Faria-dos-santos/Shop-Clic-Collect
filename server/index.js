import { createServer } from "node:http";
import "./app/helpers/env.load.js";
import mongoDBClient from "./app/helpers/mongo.client.js";
import expressApp from "./app/index.app.js";

const httpServer = createServer(expressApp);
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`🟢 Server running on : http://localhost:${PORT}🌞`);
  mongoDBClient.initialize();
});
