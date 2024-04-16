import { Router } from "express";
import {
  deleteOrder,
  getOrder,
  getOrders,
  postOrder,
  putOrder,
} from "../controllers/order-controllers";

const router = Router();

router.get("/", getOrders);

router.get("/:id", getOrder);

router.get("/", postOrder);

router.get("/:id", putOrder);

router.get("/:id", deleteOrder);

export default router;
