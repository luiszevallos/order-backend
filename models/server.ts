import express, { Application } from "express";
import cors from "cors";
//
import {
  authRoutes,
  categoryRoutes,
  customerRoutes,
  orderRoutes,
  productRoutes,
  userRoutes,
} from "../routes";
import { dbConnection } from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private paths: {
    auth: string;
    categories: string;
    customers: string;
    orders: string;
    products: string;
    users: string;
  };

  constructor() {
    this.app = express();
    this.port = process?.env?.PORT || "3000";
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

  async connection() {
    try {
      await dbConnection();
      console.log("Database online");
    } catch (error) {
      console.log("🚀 ~ Server ~ dbConnection ~ error:", error);
      throw new Error("Error en conectar db");
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // parse body
    this.app.use(express.json());
    //public folder
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, authRoutes);
    this.app.use(this.paths.categories, categoryRoutes);
    this.app.use(this.paths.customers, customerRoutes);
    this.app.use(this.paths.orders, orderRoutes);
    this.app.use(this.paths.products, productRoutes);
    this.app.use(this.paths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriente en el puerto ${this.port}`);
    });
  }
}

export default Server;
