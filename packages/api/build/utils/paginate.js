"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = (cities, limit, offset) => {
    if (!limit && offset === 0)
        return cities;
    const end = limit ? limit + offset : undefined;
    return cities.slice(offset, end);
};
exports.paginate = paginate;
