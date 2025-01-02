// Import the Router class from the Express.js framework
import { Router } from "express";

// Import the ordersController module, which contains functions to handle order-related routes
import ordersController from "../Controller/ordersController";

// Create a new instance of the Router class
const router = Router();

// Define routes for order management

// This route is handled by the showAll function in the ordersController module
router.get("/orders", ordersController.showAll);

// This route is handled by the createOrder function in the ordersController module
router.get("/orders/create", ordersController.createOrder);

// This route is handled by the showOrder function in the ordersController module
router.get("/orders/:id", ordersController.showOrder);

// This route is handled by the storeOrder function in the ordersController module
router.post("/orders/create", ordersController.storeOrder);

// This route is handled by the editOrders function in the ordersController module
router.get("/orders/edit/:id", ordersController.editOrders);

// This route is handled by the updateOrders function in the ordersController module
router.post("/orders/edit/:id", ordersController.updateOrders);

// This route is handled by the delOrders function in the ordersController module
router.get("/orders/del/:id", ordersController.delOrders);

// Export the router instance
export default router;