import { Router } from "express";
import { check } from "express-validator";
//
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controllers/user-controllers";
import { validFields } from "../middlewares";
import { emailExist, existUserId, isRoleValid } from "../helpers/db-validator";

const router = Router();

router.get("/", getUsers);

router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserId),
    validFields,
  ],
  getUser
);

router.post(
  "/",
  [
    check("name", "Nombre es obligatorio").not().isEmpty(),
    check("surname", "Apellido es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico es obligatorio").isEmail(),
    check("email").custom(emailExist),
    // TODO cambiar por helpers
    check("role", "No es un ID valido").isMongoId(),
    check("role").custom(isRoleValid),
    check("password", "Contraseña debe de ser mayor a 8 caracteres").isLength({
      min: 8,
    }),
    validFields,
  ],
  postUser
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserId),
    validFields,
  ],
  putUser
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserId),
    validFields,
  ],
  deleteUser
);

export default router;
