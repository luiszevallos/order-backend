import { Request, Response } from "express";
//
import { CustomerModel } from "../models";

export const getCustomers = async (req: Request, res: Response) => {
  const { limit = 5, page = 0 } = req.query;

  const option = {
    status: true,
  };

  const [count, rows] = await Promise.all([
    await CustomerModel.countDocuments(option),
    await CustomerModel.find(option)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
  ]);

  res.json({
    message: "Lista de clientes",
    data: {
      rows,
      count,
    },
  });
};

export const getCustomer = (req: Request, res: Response) => {
  const { id } = req.params;

  const customer = CustomerModel.findById(id);

  res.json({
    message: "Datos de cliente",
    data: customer,
  });
};

export const postCustomer = async (req: Request, res: Response) => {
  const { name, documentNumber, documentType, address } = req.body;

  const customer = new CustomerModel({
    name,
    address,
    document: {
      number: documentNumber,
      type: documentType,
    },
  });

  await customer.save();

  res.status(201).json({
    message: "Crear de cliente exitoso!",
    data: customer,
  });
};

export const putCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, email, _id, ...data } = req.body;

  const customer = await CustomerModel.findByIdAndUpdate(id, data);

  res.json({
    message: "cliente actualizado exitoso!",
    data: customer,
  });
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;

  const customer = await CustomerModel.findByIdAndUpdate(id, { status: false });

  res.json({
    message: "cliente eliminado",
    data: customer,
  });
};
