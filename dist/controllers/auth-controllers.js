"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = void 0;
const models_1 = require("../models");
const crypt_1 = require("../helpers/crypt");
const generator_jwt_1 = __importDefault(require("../helpers/generator-jwt"));
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield models_1.UserModel.findOne({ email });
        if (!user || !(user === null || user === void 0 ? void 0 : user.status)) {
            return res.status(400).json({
                message: "Correo / contraseña no son correctos",
            });
        }
        if (!(0, crypt_1.getBCryptCompare)(password, user.password)) {
            return res.status(400).json({
                message: "Correo / contraseña no son correctos",
            });
        }
        const accessToken = yield (0, generator_jwt_1.default)(`${user._id}`);
        res.status(200).json({
            message: "Login exitoso!",
            token: accessToken,
            data: user,
        });
    }
    catch (error) {
        console.log("🚀 ~ login ~ error:", error);
        res.status(500).json({
            message: "Error interno",
        });
    }
});
exports.postLogin = postLogin;
//# sourceMappingURL=auth-controllers.js.map