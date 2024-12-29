import { Request, Response } from "express";
import { IOrders } from "../Model/orders";
import ordersModel from "../Model/ordersModel";



async function showAll(req: Request, res: Response, next: any) {
    const orders = await ordersModel.findAll();
    res.json(orders);
}

async function showOrder(req: Request, res: Response, next: any) {
    const order = await ordersModel.findByPk(req.params.id);
    res.json(order);
}

async function createOrder(req: Request, res: Response, next: any) {
    res.render("createOrder");
}

async function storeOrder(req: Request, res: Response, next: any) {
    try {
        console.log(req.body);
        let order = req.body as IOrders;
        await ordersModel.create({ ...order });
        res.redirect("/orders");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating client");
    }
}

async function editOrders(req: Request, res: Response, next: any) {
    const order = await ordersModel.findByPk(req.params.id);
    res.render("editOrder", { order: order });
}

async function updateOrders(req: Request, res: Response, next: any) {
    await ordersModel.update(
        req.body as IOrders, {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/orders");
}

async function delOrders(req: Request, res: Response, next: any) {
    await ordersModel.destroy(
        {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/orders");
}

export default { showAll, createOrder, storeOrder, showOrder, editOrders, updateOrders, delOrders };