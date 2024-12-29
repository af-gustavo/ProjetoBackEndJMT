import { Request, Response } from "express";
import { IProducts } from "../Model/products";
import productsModel from "../Model/productsModel";

async function products(req: Request, res: Response, next: any) {

    if (process.env.APP_LOGIN == "1") {
        const products = await productsModel.findAll();
        res.render("products", {products: products})
    } else {
        res.send("Login não efetuado, página inacessível.")
    }
}



function create(req: Request, res: Response, next: any) {
    res.render("productsCreate");
}

async function store(req: Request, res: Response, next: any) {
    try {
        console.log(req.body);
        let product = req.body as IProducts;
        await productsModel.create({ ...product });
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating product");
    }
}

async function edit(req: Request, res: Response, next: any) {
    const product = await productsModel.findByPk(req.params.id);
    res.render("productsEdit", { product: product });
}

async function update(req: Request, res: Response, next: any) {
    await productsModel.update(
        req.body as IProducts, {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/products");
}

async function del(req: Request, res: Response, next: any) {
    await productsModel.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )

    res.redirect("/products");
}

export default { products, create, store, edit, update, del };