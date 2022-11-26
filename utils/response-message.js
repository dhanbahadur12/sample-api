const responseMessage = (res, statusCode, data, message, method) => {
    return res.status(statusCode || 200).json({
      message: message?.length ? message : "default message",
      method: method.toUpperCase(),
      data: Object.keys(data).length ? data : [],
      statusCode: statusCode || 200,
    });
  };
  
  module.exports = { responseMessage };