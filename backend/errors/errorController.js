import CustomError from "./customError.js";


const castErrorHandler = (err) =>{
  const msg = `Invalid value ${err.value} for field ${err.path}`;
  return new CustomError(msg,400);
}

const  duplicateKeyErrorHandler = (err)=>{
  const name = err.keyValue.name;
  const msg = `there is already a ${name} exist.duplicate value not allowed!`;
  return new CustomError(msg,400)
}

const handleExpiredjwt = (err)=>{
  return new CustomError("Session Expired ,Please login again",401)
}
const handleJwtError = (err)=>{
  return new CustomError("Invalid Token.Please Login Again",401);
}

export default function globalErrorHandler (error,req,res,next){
  error.statusCode= error.statusCode ||500;
  error.status=error.status||'error';
  if(error.name === 'CastError')
  {
    castErrorHandler(error);
  }
  if(error.code===11000)
  {
    error = duplicateKeyErrorHandler(error);
  }
  if(error.name=== 'TokenExpiredError') error = handleExpiredjwt(error);
  if(error.name==='JsonWebTokenError') error = handleJwtError(error);
  else{
  res.status(error.statusCode).json({
    status: error.statusCode,
    message:error.message
  });
  }
}
