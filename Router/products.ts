import { Router } from "express";
import productsController from "../Controller/productsController";

const router = Router();

router.get("/products", productsController.products);

router.get("/products/create", productsController.create);
router.post("/products/create", productsController.store);

router.get("/products/edit/:id", productsController.edit);
router.post("/products/edit/:id", productsController.update);

router.get("/products/del/:id", productsController.del);

export default router;