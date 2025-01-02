import { Request, Response } from "express";
import { IOrders } from "../Model/orders";
import ordersModel from "../Model/ordersModel";

/**
 * Handles GET requests to the /orders endpoint.
 * Retrieves all orders from the database and sends them as a JSON response.
 */
async function showAll(req: Request, res: Response, next: any) {
    const orders = await ordersModel.findAll();
    res.json(orders);
}

/**
 * Handles GET requests to the /orders/:id endpoint.
 * Retrieves a single order from the database based on the provided ID and sends it as a JSON response.
 */
async function showOrder(req: Request, res: Response, next: any) {
    const order = await ordersModel.findByPk(req.params.id);
    res.json(order);
}

/**
 * Handles GET requests to the /orders/create endpoint.
 * Renders the "createOrder" template.
 */
async function createOrder(req: Request, res: Response, next: any) {
    res.render("createOrder");
}

// Export the order controller functions as the default export
export default { showAll, createOrder, showOrder };