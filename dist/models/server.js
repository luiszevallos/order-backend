"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//
const routes_1 = require("../routes");
const connection_1 = require("../db/connection");
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.port = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) || "3000";
        this.paths = {
            auth: "/api/auth",
            categories: "/api/categories",
            customers: "/api/customers",
            orders: "/api/orders",
            products: "/api/products",
            users: "/api/users",
        };
        this.connection();
        this.middlewares();
        this.routes();
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.dbConnection)();
                console.log("Database online");
            }
            catch (error) {
                console.log("🚀 ~ Server ~ dbConnection ~ error:", error);
                throw new Error("Error en conectar db");
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // parse body
        this.app.use(express_1.default.json());
        //public folder
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.paths.auth, routes_1.authRoutes);
        this.app.use(this.paths.categories, routes_1.categoryRoutes);
        this.app.use(this.paths.customers, routes_1.customerRoutes);
        this.app.use(this.paths.orders, routes_1.orderRoutes);
        this.app.use(this.paths.products, routes_1.productRoutes);
        this.app.use(this.paths.users, routes_1.userRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriente en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map