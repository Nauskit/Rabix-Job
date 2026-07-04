const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const isOperational = err.isOperational || false;

    if (!isOperational) {
        console.error("UNEXPECTED ERROR:", err);
    } else {
        console.warn(`Operational error [${status}]:`, err.message);
    }

    const message = isOperational ? err.message : "Internal server error";

    res.status(status).json({
        error: message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    })
}