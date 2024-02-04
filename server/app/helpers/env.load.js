import dotenv from "dotenv";

export default
dotenv.config();

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
