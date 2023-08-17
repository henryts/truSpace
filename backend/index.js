
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
//import users from "./routes/users.js";
import postRoutes from "./routes/post.js";

import { createPost } from "./controllers/post.js";
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
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));//remove
 app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));




/* ROUTES WITH FILES */
//app.post("/auth/signup",signup) //  upload.single("picture"), register);


/* ROUTES */
app.use("/auth", authRoutes);
//app.use("/users", users);
app.use("/posts", postRoutes);

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
  