import { Router } from "express";
import { getAllProducts, postProduct, getProductById } from "../controllers/productController";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
productRouter.post("/", postProduct);
productRouter.put("/", postProduct);

module.exports = productRouter;