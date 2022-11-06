function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`Page - Not Found - ${req.originalUrl}`);
    next(error);
  }
  
function errorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
    });
}

function invalidBody(err, req, res, next) {
  // specific for validation errors
  if (err instanceof Validate.ValidationError)
    return res.status(400).json(err);
};

module.exports = {
    notFound,
    errorHandler,
    invalidBody
};