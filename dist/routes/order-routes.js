"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controllers_1 = require("../controllers/order-controllers");
const router = (0, express_1.Router)();
router.get("/", order_controllers_1.getOrders);
router.get("/:id", order_controllers_1.getOrder);
router.get("/", order_controllers_1.postOrder);
router.get("/:id", order_controllers_1.putOrder);
router.get("/:id", order_controllers_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=order-routes.js.map