"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
//
const category_controllers_1 = require("../controllers/category-controllers");
const middlewares_1 = require("../middlewares");
const db_validator_1 = require("../helpers/db-validator");
const router = (0, express_1.Router)();
router.get("/", category_controllers_1.getCategories);
router.get("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCategoryId),
    middlewares_1.validFields,
], category_controllers_1.getCategory);
router.post("/", [
    (0, express_validator_1.check)("name", "Nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("description", "Descripción es obligatorio").not().isEmpty(),
    middlewares_1.validFields,
], category_controllers_1.postCategory);
router.put("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCategoryId),
    middlewares_1.validFields,
], category_controllers_1.putCategory);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "No es un ID válido").isMongoId(),
    (0, express_validator_1.check)("id").custom(db_validator_1.existCategoryId),
    middlewares_1.validFields,
], category_controllers_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=category-routes.js.map