class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.messages = message;
    }
}

module.exports = ApiError;