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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
//
const models_1 = require("../models");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, page = 0 } = req.query;
    const option = {
        status: true,
    };
    const [count, rows] = yield Promise.all([
        yield models_1.ProductModel.countDocuments(option),
        yield models_1.ProductModel.find(option)
            .skip(Number(page) * Number(limit))
            .limit(Number(limit)),
    ]);
    res.json({
        message: "Lista de productos",
        data: {
            rows,
            count,
        },
    });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    const product = models_1.ProductModel.findById(id);
    res.json({
        message: "Datos de producto",
        data: product,
    });
};
exports.getProduct = getProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, category } = req.body;
    const product = new models_1.ProductModel({
        name,
        description,
        price,
        category,
    });
    yield product.save();
    res.status(201).json({
        message: "Creación de producto exitoso!",
        data: product,
    });
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
    const product = yield models_1.ProductModel.findByIdAndUpdate(id, data);
    res.json({
        message: "producto actualizado exitoso!",
        data: product,
    });
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield models_1.ProductModel.findByIdAndUpdate(id, { status: false });
    res.json({
        message: "producto eliminado",
        data: product,
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product-controllers.js.map