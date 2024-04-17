import { Router } from "express";
import { check } from "express-validator";
//
import {
  deleteCategory,
  getCategory,
  getCategories,
  postCategory,
  putCategory,
} from "../controllers/category-controllers";
import { validFields } from "../middlewares";
import { existCategoryId } from "../helpers/db-validator";

const router = Router();

router.get("/", getCategories);

router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCategoryId),
    validFields,
  ],
  getCategory
);

router.post(
  "/",
  [
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("description", "Descripción es obligatorio").not().isEmpty(),
    validFields,
  ],
  postCategory
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCategoryId),
    validFields,
  ],
  putCategory
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCategoryId),
    validFields,
  ],
  deleteCategory
);

export default router;
