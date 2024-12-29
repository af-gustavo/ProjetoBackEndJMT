import { Router } from "express";
import ordersController from "../Controller/ordersController";

const router = Router();

router.get("/orders", ordersController.showAll);
router.get("/orders/create", ordersController.createOrder);
router.get("/orders/:id", ordersController.showOrder);


router.post("/orders/create", ordersController.storeOrder);

router.get("/orders/edit/:id", ordersController.editOrders);
router.post("/orders/edit/:id", ordersController.updateOrders);

router.get("/orders/del/:id", ordersController.delOrders);

export default router;