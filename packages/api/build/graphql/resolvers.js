"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const service_1 = require("../cities/service");
const utils_1 = require("../utils");
const apollo_server_core_1 = require("apollo-server-core");
exports.resolvers = {
    Query: {
        cities: (_, { filter, limit, offset }) => {
            const { cities, total } = service_1.citiesService.getAll(filter !== null && filter !== void 0 ? filter : {}, limit, offset);
            return { cities, total };
        },
        city: (_, { id }) => {
            const city = service_1.citiesService.get(id);
            if (!city)
                throw new apollo_server_core_1.HttpQueryError(404, `A city with id: ${id} could not be found`);
            return city;
        },
    },
    Mutation: {
        updateCity: (_, { input: { id, visited, wishlist } }) => {
            const fieldsToUpdate = (0, utils_1.isDefined)(visited) ? { visited } : {};
            (0, utils_1.isDefined)(wishlist) && Object.assign(fieldsToUpdate, { wishlist });
            const updatedCity = service_1.citiesService.update(id, fieldsToUpdate);
            if (!updatedCity)
                throw new apollo_server_core_1.HttpQueryError(404, `A city with id: ${id} could not be found`);
            return updatedCity;
        },
    },
};
