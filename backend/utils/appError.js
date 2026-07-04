class appError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.isOperational = true;
    }
}


module.exports = appError;