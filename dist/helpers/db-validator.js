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
Object.defineProperty(exports, "__esModule", { value: true });
exports.existUserId = exports.emailExist = exports.isRoleValid = void 0;
const models_1 = require("../models");
const isRoleValid = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const role = yield models_1.RoleModel.findById(id);
    if (!role) {
        throw new Error("Rol no existe");
    }
    return true;
});
exports.isRoleValid = isRoleValid;
const emailExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = yield models_1.UserModel.findOne({ email });
    if (exist) {
        throw new Error("Correo electrónico ya está registrado");
    }
    return true;
});
exports.emailExist = emailExist;
const existUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserModel.findById(id);
    if (!user || (user === null || user === void 0 ? void 0 : user.status)) {
        throw new Error("El ID no existe");
    }
    return true;
});
exports.existUserId = existUserId;
//# sourceMappingURL=db-validator.js.map