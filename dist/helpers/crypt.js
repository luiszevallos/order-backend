"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBCryptCompare = exports.setBCrypt = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const setBCrypt = (value) => {
    const salt = bcryptjs_1.default.genSaltSync();
    return bcryptjs_1.default.hashSync(value, salt);
};
exports.setBCrypt = setBCrypt;
const getBCryptCompare = (value, hash) => {
    return bcryptjs_1.default.compareSync(value, hash);
};
exports.getBCryptCompare = getBCryptCompare;
//# sourceMappingURL=crypt.js.map