import { config } from 'dotenv';
import mongoose from "mongoose";



config();
const CONNECTION_URL = process.env.MONGO_URI;


const connection = mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
export default connection;
