import { Request, Response } from "express";
//
import { ProductModel } from "../models";

export const getProducts = async (req: Request, res: Response) => {
  const { limit = 5, page = 0 } = req.query;

  const option = {
    status: true,
  };

  const [count, rows] = await Promise.all([
    await ProductModel.countDocuments(option),
    await ProductModel.find(option)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
  ]);

  res.json({
    message: "Lista de productos",
    data: {
      rows,
      count,
    },
  });
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  const product = ProductModel.findById(id);

  res.json({
    message: "Datos de producto",
    data: product,
  });
};

export const postProduct = async (req: Request, res: Response) => {
  const { name, description, price, category } = req.body;

  const product = new ProductModel({
    name,
    description,
    price,
    category,
  });

  await product.save();

  res.status(201).json({
    message: "Creación de producto exitoso!",
    data: product,
  });
};

export const putProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id, ...data } = req.body;

  const product = await ProductModel.findByIdAndUpdate(id, data);

  res.json({
    message: "producto actualizado exitoso!",
    data: product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductModel.findByIdAndUpdate(id, { status: false });

  res.json({
    message: "producto eliminado",
    data: product,
  });
};
