import { Request, Response } from "express";

export const getCustomers = (req: Request, res: Response) => {
  res.json({
    message: "Lista de clientes",
  });
};

export const getCustomer = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Datos de cliente",
    id,
  });
};

export const postCustomer = (req: Request, res: Response) => {
  res.json({
    message: "Crear cliente",
  });
};

export const putCustomer = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Actualizar cliente",
    id,
  });
};

export const deleteCustomer = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Eliminar cliente",
    id,
  });
};
