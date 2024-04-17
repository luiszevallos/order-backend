"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.CustomerModel = exports.ProductModel = exports.CategoryModel = exports.RoleModel = exports.UserModel = void 0;
var user_model_1 = require("./user-model");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return __importDefault(user_model_1).default; } });
var role_model_1 = require("./role-model");
Object.defineProperty(exports, "RoleModel", { enumerable: true, get: function () { return __importDefault(role_model_1).default; } });
var category_model_1 = require("./category-model");
Object.defineProperty(exports, "CategoryModel", { enumerable: true, get: function () { return __importDefault(category_model_1).default; } });
var product_model_1 = require("./product-model");
Object.defineProperty(exports, "ProductModel", { enumerable: true, get: function () { return __importDefault(product_model_1).default; } });
var customer_model_1 = require("./customer-model");
Object.defineProperty(exports, "CustomerModel", { enumerable: true, get: function () { return __importDefault(customer_model_1).default; } });
//
var server_1 = require("./server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return __importDefault(server_1).default; } });
//# sourceMappingURL=index.js.map