import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from './routes/post.js'

const app = express();
app.use('/post',router);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = "mongodb+srv://henrysathyan:henry123@truespace.0dvmc8w.mongodb.net/";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL) // { userNewUrlParser: true, useUnifiedTopology: true }
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
//mongoose.set("useFindAndModify", false);
