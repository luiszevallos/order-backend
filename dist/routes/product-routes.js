"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product-controllers");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const db_validator_1 = require("../helpers/db-validator");
const router = (0, express_1.Router)();
router.get("/", product_controllers_1.getProducts);
router.get("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existProductId),
    middlewares_1.validFields,
], product_controllers_1.getProduct);
router.post("/", [
    (0, express_validator_1.check)("name", "Nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("description", "Descripción es obligatorio").not().isEmpty(),
    middlewares_1.validFields,
], product_controllers_1.postProduct);
router.put("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existProductId),
    middlewares_1.validFields,
], product_controllers_1.putProduct);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existProductId),
    middlewares_1.validFields,
], product_controllers_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product-routes.js.map