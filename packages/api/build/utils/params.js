"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramToBoolean = exports.paramToNumber = void 0;
const common_1 = require("../common");
const _1 = require(".");
const paramToNumber = (value) => {
    if (!value)
        return undefined;
    if (typeof value === 'number')
        return value;
    const num = parseInt(value);
    if (isNaN(num)) {
        throw new common_1.HttpError(422, `param ${value} is invalid`);
    }
    return num;
};
exports.paramToNumber = paramToNumber;
const paramToBoolean = (value) => {
    if (!value)
        return undefined;
    if (typeof value === 'boolean')
        return value;
    const dict = {
        false: false,
        true: true,
    };
    if (!(0, _1.isDefined)(dict[value])) {
        throw new common_1.HttpError(422, `param ${value} is invalid`);
    }
    return dict[value];
};
exports.paramToBoolean = paramToBoolean;
