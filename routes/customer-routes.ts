import { Router } from "express";
import {
  deleteCustomer,
  getCustomer,
  getCustomers,
  postCustomer,
  putCustomer,
} from "../controllers/customer-controllers";

const router = Router();

router.get("/", getCustomers);

router.get("/:id", getCustomer);

router.get("/", postCustomer);

router.get("/:id", putCustomer);

router.get("/:id", deleteCustomer);

export default router;
