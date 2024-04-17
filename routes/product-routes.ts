import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../controllers/product-controllers";
import { check } from "express-validator";
import { validFields } from "../middlewares";
import { existProductId } from "../helpers/db-validator";

const router = Router();

router.get("/", getProducts);

router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existProductId),
    validFields,
  ],
  getProduct
);

router.post(
  "/",
  [
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("description", "Descripción es obligatorio").not().isEmpty(),
    validFields,
  ],
  postProduct
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existProductId),
    validFields,
  ],
  putProduct
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existProductId),
    validFields,
  ],
  deleteProduct
);

export default router;
