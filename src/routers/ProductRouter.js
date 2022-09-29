import express from "express";
import { getAllProducts, getProductById } from "../models/product/ProductModel.js";

const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        const { _id } = req.params;
        const products = _id ? await getProductById(_id) : await getAllProducts();
        res.json({
            status: "success",
            message: "Products successfully retrived",
            products,
        })

    } catch (error) {
        next(error);
    }
})

export default router;