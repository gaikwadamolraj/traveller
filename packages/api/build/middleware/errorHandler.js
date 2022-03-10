"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = ({ statusCode, message }, _req, res, _next) => {
    const status = statusCode || 500;
    res.status(status).send({ status, message });
};
exports.errorHandler = errorHandler;
