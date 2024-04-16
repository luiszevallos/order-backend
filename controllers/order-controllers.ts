import { Request, Response } from "express";

export const getOrders = (req: Request, res: Response) => {
  res.json({
    message: "Lista de pedidos",
  });
};

export const getOrder = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Datos de pedido",
    id,
  });
};

export const postOrder = (req: Request, res: Response) => {
  res.json({
    message: "Crear pedido",
  });
};

export const putOrder = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Actualizar pedido",
    id,
  });
};

export const deleteOrder = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Eliminar pedido",
    id,
  });
};
