"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product-controllers");
const router = (0, express_1.Router)();
router.get("/", product_controllers_1.getProducts);
router.get("/:id", product_controllers_1.getProduct);
router.get("/", product_controllers_1.postProduct);
router.get("/:id", product_controllers_1.putProduct);
router.get("/:id", product_controllers_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product-routes.js.map