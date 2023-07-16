import express from "express";
import bodyParser from "body-parser";

import cors from "cors";
import userRouter from './routes/userRoutes.js';
import connection from "./config/db.js";
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use('/',userRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(PORT, () => console.log(`server running on port:${PORT}`))
//mongoose.set("useFindAndModify", false);
