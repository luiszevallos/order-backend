"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = exports.productRoutes = exports.orderRoutes = exports.customerRoutes = exports.userRoutes = void 0;
var user_routes_1 = require("./user-routes");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
var customer_routes_1 = require("./customer-routes");
Object.defineProperty(exports, "customerRoutes", { enumerable: true, get: function () { return __importDefault(customer_routes_1).default; } });
var order_routes_1 = require("./order-routes");
Object.defineProperty(exports, "orderRoutes", { enumerable: true, get: function () { return __importDefault(order_routes_1).default; } });
var product_routes_1 = require("./product-routes");
Object.defineProperty(exports, "productRoutes", { enumerable: true, get: function () { return __importDefault(product_routes_1).default; } });
var auth_routes_1 = require("./auth-routes");
Object.defineProperty(exports, "authRoutes", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
//# sourceMappingURL=index.js.map