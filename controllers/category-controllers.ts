import { Request, Response } from "express";
//
import { CategoryModel } from "../models";

export const getCategories = async (req: Request, res: Response) => {
  const { limit = 5, page = 0 } = req.query;

  const option = {
    status: true,
  };

  const [count, rows] = await Promise.all([
    await CategoryModel.countDocuments(option),
    await CategoryModel.find(option)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
  ]);

  res.json({
    message: "Lista de categorías",
    data: {
      rows,
      count,
    },
  });
};

export const getCategory = (req: Request, res: Response) => {
  const { id } = req.params;

  const category = CategoryModel.findById(id);

  res.json({
    message: "Datos de categoría",
    data: category,
  });
};

export const postCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  const category = new CategoryModel({
    name,
    description,
  });

  await category.save();

  res.status(201).json({
    message: "Crear de categoría exitoso!",
    data: category,
  });
};

export const putCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, email, _id, ...data } = req.body;

  const category = await CategoryModel.findByIdAndUpdate(id, data);

  res.json({
    message: "Categoría actualizado exitoso!",
    data: category,
  });
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await CategoryModel.findByIdAndUpdate(id, { status: false });

  res.json({
    message: "Categoría eliminado",
    data: category,
  });
};
