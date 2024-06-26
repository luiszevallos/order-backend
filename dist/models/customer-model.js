"use strict";
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
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Nombre es obligatorio"],
    },
    document: {
        type: {
            type: String,
            required: [true, "Tipo de documento es obligatorio"],
        },
        number: {
            type: String,
            required: [true, "Número de documento es obligatorio"],
        },
    },
    address: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
});
CustomerSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, customer = __rest(_a, ["__v"]);
    return customer;
};
exports.default = (0, mongoose_1.model)("Customer", CustomerSchema);
//# sourceMappingURL=customer-model.js.map