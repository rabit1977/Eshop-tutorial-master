// class ErrorHandler extends Error{
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode = statusCode

//         Error.captureStackTrace(this,this.constructor);

//     }
    
// }
// module.exports = ErrorHandler

function ErrorHandler(message, statusCode) {
    // Create a new error object with the given message
    let error = new Error(message);
    // console.log(error);
    // Set the status code property on the error object
    error.statusCode = statusCode;
    // Capture the stack trace of the error object
    Error.captureStackTrace(error, ErrorHandler);
    // Return the error object
    return error;
  }
  
  module.exports = ErrorHandler;