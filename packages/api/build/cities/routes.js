"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const common_1 = require("../common");
const utils_1 = require("../utils");
exports.citiesRouter = express_1.default.Router();
exports.citiesRouter.get('/', (req, res) => {
    /*	#swagger.responses[200] = {
      schema: { $ref: "#/definitions/Cities" }
    } */
    const { offset, limit, visited, wishlist, id, name, country } = req.query;
    const { cities, total } = service_1.citiesService.getAll({
        visited: (0, utils_1.paramToBoolean)(visited),
        wishlist: (0, utils_1.paramToBoolean)(wishlist),
        id: (0, utils_1.paramToNumber)(id),
        name,
        country,
    }, (0, utils_1.paramToNumber)(limit), (0, utils_1.paramToNumber)(offset));
    res.send({ cities, total });
});
exports.citiesRouter.get('/:cityId', (req, res) => {
    /*	#swagger.responses[200] = {
      schema: { $ref: "#/definitions/City" }
    } */
    const city = service_1.citiesService.get(req.params.cityId);
    if (city)
        return res.send(city);
    throw new common_1.HttpError(404, 'Resource not found');
});
exports.citiesRouter.put('/:cityId', (req, res) => {
    /*	#swagger.parameters['body'] = {
      in: 'body',
      description: 'City properties to be updated',
      required: true,
      schema: {
        visited: false,
        wishlist: true,
       }
    } */
    const updatedCity = service_1.citiesService.update(req.params.cityId, req.body);
    if (updatedCity)
        return res.send(updatedCity);
    throw new common_1.HttpError(404, 'Resource not found');
});
