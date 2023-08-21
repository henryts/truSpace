
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js";


import { verifyToken } from "./middleware/auth.js";
import User from "./models/userModel.js";
import Post from "./models/Post.js";

import CustomError from "./errors/customError.js";
import globalErrorHandler from "./errors/errorController.js";
//import { users, posts } from "./data/index.js";



/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
 app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

 

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
export const upload = multer({ storage });



/* ROUTES WITH FILES */
//app.post("/auth/signup",signup) //  upload.single("picture"), register);


/* ROUTES */
app.use("/auth", authRoutes);
//app.use("/users", users);
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

/* Error handlers */
app.all('*',(req,res,next)=>{
  const err = new CustomError(`can't find the ${req.originalUrl} on the server !`,404);
  next(err);
  })
  app.use(globalErrorHandler);
  

/* MONGOOSE SETUP */
mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 6001;
mongoose
  .connect( 'mongodb://0.0.0.0:27017/truSpace', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Connected to server Port: ${PORT}`));
   

  })
  .catch((error) => console.log(`${error} did not connect`));
  