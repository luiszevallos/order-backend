"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
//ß
const auth_controllers_1 = require("../controllers/auth-controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("email", "Correo no es válido").isEmail(),
    (0, express_validator_1.check)("password", "La contraseña es olbligatoria").not().isEmpty(),
    middlewares_1.validFields,
], auth_controllers_1.postLogin);
exports.default = router;
//# sourceMappingURL=auth-routes.js.map