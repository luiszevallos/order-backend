import { Router } from "express";
import {
  deleteCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
  putCustomer,
} from "../controllers/customer-controllers";
import { check } from "express-validator";
import { validFields } from "../middlewares";
import { existCustomerId } from "../helpers/db-validator";

const router = Router();

router.get("/", getCustomers);

router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCustomerId),
    validFields,
  ],
  getCustomer
);

router.post(
  "/",
  [
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("documentNumber", "Número de documento es obligatorio")
      .not()
      .isEmpty(),
    check("documentType", "Tipo de documento es obligatorio").not().isEmpty(),
    validFields,
  ],
  postCustomer
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCustomerId),
    validFields,
  ],
  putCustomer
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existCustomerId),
    validFields,
  ],
  deleteCustomer
);

export default router;
