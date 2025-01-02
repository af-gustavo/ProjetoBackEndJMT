// Import the Router class from the Express.js framework
import { Router } from "express";

// Import the productsController module, which contains functions to handle product-related routes
import productsController from "../Controller/productsController";

// Create a new instance of the Router class
const router = Router();

// Define routes for product management

// This route is handled by the products function in the productsController module
router.get("/products", productsController.products);

// This route is handled by the create function in the productsController module
router.get("/products/create", productsController.create);
router.post("/products/create", productsController.store);

// This route is handled by the edit function in the productsController module
router.get("/products/edit/:id", productsController.edit);
router.post("/products/edit/:id", productsController.update);

// This route is handled by the del function in the productsController module
router.get("/products/del/:id", productsController.del);

// Export the router instance
export default router;