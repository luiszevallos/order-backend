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
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.getCustomer = exports.getCustomers = void 0;
//
const models_1 = require("../models");
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, page = 0 } = req.query;
    const option = {
        status: true,
    };
    const [count, rows] = yield Promise.all([
        yield models_1.CustomerModel.countDocuments(option),
        yield models_1.CustomerModel.find(option)
            .skip(Number(page) * Number(limit))
            .limit(Number(limit)),
    ]);
    res.json({
        message: "Lista de clientes",
        data: {
            rows,
            count,
        },
    });
});
exports.getCustomers = getCustomers;
const getCustomer = (req, res) => {
    const { id } = req.params;
    const customer = models_1.CustomerModel.findById(id);
    res.json({
        message: "Datos de cliente",
        data: customer,
    });
};
exports.getCustomer = getCustomer;
const postCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, documentNumber, documentType, address } = req.body;
    const customer = new models_1.CustomerModel({
        name,
        address,
        document: {
            number: documentNumber,
            type: documentType,
        },
    });
    yield customer.save();
    res.status(201).json({
        message: "Crear de cliente exitoso!",
        data: customer,
    });
});
exports.postCustomer = postCustomer;
const putCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { password, email, _id } = _a, data = __rest(_a, ["password", "email", "_id"]);
    const customer = yield models_1.CustomerModel.findByIdAndUpdate(id, data);
    res.json({
        message: "cliente actualizado exitoso!",
        data: customer,
    });
});
exports.putCustomer = putCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const customer = yield models_1.CustomerModel.findByIdAndUpdate(id, { status: false });
    res.json({
        message: "cliente eliminado",
        data: customer,
    });
});
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customer-controllers.js.map