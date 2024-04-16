"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.getCustomer = exports.getCustomers = void 0;
const getCustomers = (req, res) => {
    res.json({
        message: "Lista de clientes",
    });
};
exports.getCustomers = getCustomers;
const getCustomer = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Datos de cliente",
        id,
    });
};
exports.getCustomer = getCustomer;
const postCustomer = (req, res) => {
    res.json({
        message: "Crear cliente",
    });
};
exports.postCustomer = postCustomer;
const putCustomer = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Actualizar cliente",
        id,
    });
};
exports.putCustomer = putCustomer;
const deleteCustomer = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Eliminar cliente",
        id,
    });
};
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customer-controllers.js.map