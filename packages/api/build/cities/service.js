"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesService = exports.update = void 0;
const cities_1 = require("../data/cities");
const utils_1 = require("../utils");
const idFilter = (city, id) => {
    return id ? city.id === id : true;
};
const nameFilter = (city, name) => {
    return name ? city.name.toLowerCase().includes(name.toLowerCase()) : true;
};
const countryFilter = (city, country) => {
    return country ? city.country.toLowerCase().includes(country.toLowerCase()) : true;
};
const visitedFilter = (city, visited) => {
    return (0, utils_1.isDefined)(visited) ? city.visited === visited : true;
};
const wishlistFilter = (city, wishlist) => {
    return (0, utils_1.isDefined)(wishlist) ? city.wishlist === wishlist : true;
};
const getAll = ({ id, name, visited, wishlist, country }, limit, offset = 0) => {
    const data = cities_1.cities.filter(city => {
        return (idFilter(city, id) &&
            nameFilter(city, name) &&
            visitedFilter(city, visited) &&
            wishlistFilter(city, wishlist) &&
            countryFilter(city, country));
    });
    return {
        total: data.length,
        cities: (0, utils_1.paginate)(data, limit, offset),
    };
};
const get = (id) => {
    return cities_1.cities.find(city => id.toString() === city.id.toString());
};
const update = (id, { id: _id, ...updatedFields }) => {
    const city = get(id);
    if (!city)
        return;
    const updatedCity = Object.assign(city, updatedFields);
    return updatedCity;
};
exports.update = update;
exports.citiesService = {
    getAll,
    get,
    update: exports.update,
};
