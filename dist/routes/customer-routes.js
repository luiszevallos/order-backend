"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controllers_1 = require("../controllers/customer-controllers");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const db_validator_1 = require("../helpers/db-validator");
const router = (0, express_1.Router)();
router.get("/", customer_controllers_1.getCustomers);
router.get("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCustomerId),
    middlewares_1.validFields,
], customer_controllers_1.getCustomer);
router.post("/", [
    (0, express_validator_1.check)("name", "Nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("documentNumber", "Número de documento es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("documentType", "Tipo de documento es obligatorio").not().isEmpty(),
    middlewares_1.validFields,
], customer_controllers_1.postCustomer);
router.put("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCustomerId),
    middlewares_1.validFields,
], customer_controllers_1.putCustomer);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCustomerId),
    middlewares_1.validFields,
], customer_controllers_1.deleteCustomer);
exports.default = router;
//# sourceMappingURL=customer-routes.js.map