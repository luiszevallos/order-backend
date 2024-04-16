"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        message: "Lista de productos",
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Datos de producto",
        id,
    });
};
exports.getProduct = getProduct;
const postProduct = (req, res) => {
    res.json({
        message: "Crear producto",
    });
};
exports.postProduct = postProduct;
const putProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Actualizar producto",
        id,
    });
};
exports.putProduct = putProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Eliminar producto",
        id,
    });
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product-controllers.js.map