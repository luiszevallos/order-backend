import { Router } from "express";
import { check } from "express-validator";
//ß
import { postLogin } from "../controllers/auth-controllers";
import { validFields } from "../middlewares";

const router = Router();

router.post(
  "/login",
  [
    check("email", "Correo no es válido").isEmail(),
    check("password", "La contraseña es olbligatoria").not().isEmpty(),
    validFields,
  ],
  postLogin
);

export default router;
