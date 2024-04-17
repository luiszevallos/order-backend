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
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Nombre es obligatorio"],
    },
    description: {
        type: String,
        required: [true, "Descripción es obligatorio"],
    },
    price: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        unique: true,
    },
    image: {
        type: [String],
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "La categoría es obligatoria"],
    },
    available: {
        type: Boolean,
        default: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
});
ProductSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, product = __rest(_a, ["__v"]);
    return product;
};
exports.default = (0, mongoose_1.model)("Product", ProductSchema);
//# sourceMappingURL=product-model.js.map