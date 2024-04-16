"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Nombre es obligatorio"],
    },
    code: {
        type: String,
        required: [true, "Código es obligatorio"],
    },
});
exports.default = (0, mongoose_1.model)("Role", RoleSchema);
//# sourceMappingURL=role-model.js.map