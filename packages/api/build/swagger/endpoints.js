"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const routes_1 = require("../cities/routes");
const index_1 = require("../index");
const endpoints = () => {
    index_1.app.use('/rest/cities', routes_1.citiesRouter);
};
exports.endpoints = endpoints;
