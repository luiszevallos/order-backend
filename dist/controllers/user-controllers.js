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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
//
const models_1 = require("../models");
const crypt_1 = require("../helpers/crypt");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, page = 0 } = req.query;
    const option = {
        status: true,
    };
    const [count, rows] = yield Promise.all([
        yield models_1.UserModel.countDocuments(option),
        yield models_1.UserModel.find(option)
            .skip(Number(page) * Number(limit))
            .limit(Number(limit))
            .populate("role", ["name", "code"]),
    ]);
    res.json({
        message: "Lista de usuarios",
        data: {
            rows,
            count,
        },
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    const user = models_1.UserModel.findById(id).populate("role", ["name", "code"]);
    res.json({
        message: "Datos de usuario",
        data: user,
    });
};
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, password, role } = req.body;
    const user = new models_1.UserModel({
        name,
        surname,
        email,
        password,
        role,
    });
    user.password = (0, crypt_1.setBCrypt)(password);
    yield user.save();
    res.status(201).json({
        message: "Crear usuario exitoso!",
        data: {
            user,
        },
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { password, email, _id } = _a, data = __rest(_a, ["password", "email", "_id"]);
    const user = yield models_1.UserModel.findByIdAndUpdate(id, data);
    res.json({
        message: "Usuario actualizado exitoso!",
        data: user,
    });
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield models_1.UserModel.findByIdAndUpdate(id, { status: false });
    res.json({
        message: "Usuarios eliminado",
        data: user,
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user-controllers.js.map