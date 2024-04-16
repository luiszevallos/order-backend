"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
//
const user_controllers_1 = require("../controllers/user-controllers");
const middlewares_1 = require("../middlewares");
const db_validator_1 = require("../helpers/db-validator");
const router = (0, express_1.Router)();
router.get("/", user_controllers_1.getUsers);
router.get("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existUserId),
    middlewares_1.validFields,
], user_controllers_1.getUser);
router.post("/", [
    (0, express_validator_1.check)("name", "Nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("surname", "Apellido es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "Correo electrónico es obligatorio").isEmail(),
    (0, express_validator_1.check)("email").custom(db_validator_1.emailExist),
    // TODO cambiar por helpers
    (0, express_validator_1.check)("role", "No es un ID valido").isMongoId(),
    (0, express_validator_1.check)("role").custom(db_validator_1.isRoleValid),
    (0, express_validator_1.check)("password", "Contraseña debe de ser mayor a 8 caracteres").isLength({
        min: 8,
    }),
    middlewares_1.validFields,
], user_controllers_1.postUser);
router.put("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existUserId),
    middlewares_1.validFields,
], user_controllers_1.putUser);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existUserId),
    middlewares_1.validFields,
], user_controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user-routes.js.map