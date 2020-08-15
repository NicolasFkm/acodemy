import ProductService from "../services/productService";

const productService = new ProductService();

export const getAllProducts = (req, res, next) => {
    res.render("products", { products: productService.getAllProducts() });
}

export const getProductById = (req, res, next) => {
    const id = req.params.productId;
    res.json({id, msg: "test"});
}

export const postProduct = (req, res, next) => {
    res.redirect("/products");
}

export const putProduct = (req, res, next) => {
    res.redirect("/products");
}