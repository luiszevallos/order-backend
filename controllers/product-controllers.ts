import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  res.json({
    message: "Lista de productos",
  });
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Datos de producto",
    id,
  });
};

export const postProduct = (req: Request, res: Response) => {
  res.json({
    message: "Crear producto",
  });
};

export const putProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Actualizar producto",
    id,
  });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Eliminar producto",
    id,
  });
};
