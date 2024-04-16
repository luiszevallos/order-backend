"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generatorJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY_JWT || "", (err, token) => {
            if (err) {
                reject("No se puedo generar el token");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.default = generatorJWT;
//# sourceMappingURL=generator-jwt.js.map