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
exports.deleteCategory = exports.putCategory = exports.postCategory = exports.getCategory = exports.getCategories = void 0;
//
const models_1 = require("../models");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, page = 0 } = req.query;
    const option = {
        status: true,
    };
    const [count, rows] = yield Promise.all([
        yield models_1.CategoryModel.countDocuments(option),
        yield models_1.CategoryModel.find(option)
            .skip(Number(page) * Number(limit))
            .limit(Number(limit)),
    ]);
    res.json({
        message: "Lista de categorías",
        data: {
            rows,
            count,
        },
    });
});
exports.getCategories = getCategories;
const getCategory = (req, res) => {
    const { id } = req.params;
    const category = models_1.CategoryModel.findById(id);
    res.json({
        message: "Datos de categoría",
        data: category,
    });
};
exports.getCategory = getCategory;
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const category = new models_1.CategoryModel({
        name,
        description,
    });
    yield category.save();
    res.status(201).json({
        message: "Crear de categoría exitoso!",
        data: category,
    });
});
exports.postCategory = postCategory;
const putCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { password, email, _id } = _a, data = __rest(_a, ["password", "email", "_id"]);
    const category = yield models_1.CategoryModel.findByIdAndUpdate(id, data);
    res.json({
        message: "Categoría actualizado exitoso!",
        data: category,
    });
});
exports.putCategory = putCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield models_1.CategoryModel.findByIdAndUpdate(id, { status: false });
    res.json({
        message: "Categoría eliminado",
        data: category,
    });
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category-controllers.js.map