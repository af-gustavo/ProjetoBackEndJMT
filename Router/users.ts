// Import the Router class from the Express.js framework
import { Router } from "express";

// Import the usersController module, which contains functions to handle user-related routes
import usersController from "../Controller/usersController";

// Create a new instance of the Router class
const router = Router();

// Define a route for handling GET requests to the root URL ("/")
// This route is handled by the login function in the usersController module
router.get('/', usersController.login);

// Define a route for handling POST requests to the root URL ("/")
// This route is handled by the checkLogin function in the usersController module
router.post('/', usersController.checkLogin);

// Export the router instance
export default router;