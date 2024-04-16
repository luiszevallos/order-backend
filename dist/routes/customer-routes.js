"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controllers_1 = require("../controllers/customer-controllers");
const router = (0, express_1.Router)();
router.get("/", customer_controllers_1.getCustomers);
router.get("/:id", customer_controllers_1.getCustomer);
router.get("/", customer_controllers_1.postCustomer);
router.get("/:id", customer_controllers_1.putCustomer);
router.get("/:id", customer_controllers_1.deleteCustomer);
exports.default = router;
//# sourceMappingURL=customer-routes.js.map