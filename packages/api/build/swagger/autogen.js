"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const city = {
    id: 1,
    name: 'London',
    country: 'United Kingdom',
    visited: false,
    wishlist: true,
};
const doc = {
    info: {
        version: '0.1.0',
        title: 'Traveller API',
        description: 'Smartpension Traveller Rest API',
    },
    host: 'localhost:4000',
    definitions: {
        City: city,
        Cities: [city],
    },
};
const outputFile = './src/swagger/output.json';
const endpointsFiles = ['./src/swagger/endpoints.ts'];
(0, swagger_autogen_1.default)()(outputFile, endpointsFiles, doc);
