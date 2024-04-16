"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = void 0;
const getOrders = (req, res) => {
    res.json({
        message: "Lista de pedidos",
    });
};
exports.getOrders = getOrders;
const getOrder = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Datos de pedido",
        id,
    });
};
exports.getOrder = getOrder;
const postOrder = (req, res) => {
    res.json({
        message: "Crear pedido",
    });
};
exports.postOrder = postOrder;
const putOrder = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Actualizar pedido",
        id,
    });
};
exports.putOrder = putOrder;
const deleteOrder = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Eliminar pedido",
        id,
    });
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=order-controllers.js.map