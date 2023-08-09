import jwt from "jsonwebtoken";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";
import util from "util"
import User from "../models/userModel.js";
import CustomError from "../errors/customError.js";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const protect = asyncErrorHandler( async (req, res,next) => {

  const testToken = req.headers.authorization;
  console.log({testToken});
  let token;
  if(testToken && testToken.startsWith('bearer'))
  {
    token=testToken.split(' ')[1];
  }
  if(!token)
  {
    next(new CustomError("you are not logged in!",401));
  }
  const decodedToken = await util.promisify(jwt.verify)(token,process.env.JWT_SECRET);
  const userdet = await User.findById(decodedToken.id);
  if(!userdet)
  {
    const error = new CustomError('The user with given token does not exist',401);
    next(error);
  }
  //skiped password changed case
  req.user= userdet;
  next();
})