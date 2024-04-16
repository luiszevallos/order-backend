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
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Nombre es requerido"],
    },
    surname: {
        type: String,
        required: [true, "Apellido es requerido"],
    },
    email: {
        type: String,
        required: [true, "Correo es requerido"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Contraseña es requerido"],
    },
    image: {
        type: String,
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
});
UserSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password, _id } = _a, user = __rest(_a, ["__v", "password", "_id"]);
    return Object.assign(Object.assign({}, user), { uid: _id });
};
exports.default = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=user-model.js.map