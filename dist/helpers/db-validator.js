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
exports.existCustomerId = exports.existProductId = exports.existCategoryId = exports.existUserId = exports.emailExist = exports.isRoleValid = void 0;
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
const existCategoryId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield models_1.CategoryModel.findById(id);
    if (!category || (category === null || category === void 0 ? void 0 : category.status)) {
        throw new Error("El ID no existe");
    }
    return true;
});
exports.existCategoryId = existCategoryId;
const existProductId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield models_1.ProductModel.findById(id);
    if (!product || (product === null || product === void 0 ? void 0 : product.status)) {
        throw new Error("El ID no existe");
    }
    return true;
});
exports.existProductId = existProductId;
const existCustomerId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield models_1.CustomerModel.findById(id);
    if (!customer || (customer === null || customer === void 0 ? void 0 : customer.status)) {
        throw new Error("El ID no existe");
    }
    return true;
});
exports.existCustomerId = existCustomerId;
//# sourceMappingURL=db-validator.js.map