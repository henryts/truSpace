import express from "express";
import bodyParser from "body-parser";

import cors from "cors";
import router from './routes/post.js';
import connection from "./config/db.js";
const PORT = process.env.PORT || 5000;

const app = express();
app.use('/post',router);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.listen(PORT, () => console.log(`server running on port:${PORT}`))
//mongoose.set("useFindAndModify", false);
