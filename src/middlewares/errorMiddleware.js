const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    // Invalid MongoDB ObjectId
    if (err.name === 'CastError') {
        return res.status(404).json({
            message: 'Resource not found'
        });
    }

    // Duplicate key error
    if (err.code === 11000) {
        return res.status(400).json({
            message: 'Duplicate field value entered'
        });
    }

    res.status(err.status || 500).json({
        message: err.message || 'Server Error'
    });
};

module.exports = errorMiddleware;