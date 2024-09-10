const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  let errorResponse = {
    title: "Error",
    message: err.message,
    // Show stack trace only in development mode
    stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
  };

  switch (statusCode) {
    case 400:
      errorResponse.title = "Validation Failed";
      break;
    case 401:
      errorResponse.title = "Unauthorized";
      break;
    case 403:
      errorResponse.title = "Forbidden";
      break;
    case 404:
      errorResponse.title = "Not Found";
      break;
    case 500:
    default:
      errorResponse.title = "Server Error";
      break;
  }

  res.json(errorResponse);
};

module.exports = errorHandler;
