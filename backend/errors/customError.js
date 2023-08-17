class CustomError extends Error{

   constructor(message,statusCode)
   {
    super(message);
    console.log(message);
    this.statusCode=statusCode;
    this.status= statusCode >= 400&& statusCode<500?'fail':'error';
    this.isOperational=true;
    Error.captureStackTrace(this,this.constructor);
   }

}
export default CustomError;