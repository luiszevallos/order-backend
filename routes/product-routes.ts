import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../controllers/product-controllers";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.get("/", postProduct);

router.get("/:id", putProduct);

router.get("/:id", deleteProduct);

export default router;
