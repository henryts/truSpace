import express from "express";

import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connection from "./config/db.js";
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.listen(PORT, () => console.log(`server running on port:${PORT}`));
//mongoose.set("useFindAndModify", false);
