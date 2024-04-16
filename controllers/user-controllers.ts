import { Request, Response } from "express";
//
import { UserModel } from "../models";
import { setBCrypt } from "../helpers/crypt";

export const getUsers = async (req: Request, res: Response) => {
  const { limit = 5, page = 0 } = req.query;

  const option = {
    status: true,
  };

  const [count, rows] = await Promise.all([
    await UserModel.countDocuments(option),
    await UserModel.find(option)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit))
      .populate("role", ["name", "code"]),
  ]);

  res.json({
    message: "Lista de usuarios",
    data: {
      rows,
      count,
    },
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;

  const user = UserModel.findById(id).populate("role", ["name", "code"]);

  res.json({
    message: "Datos de usuario",
    data: user,
  });
};

export const postUser = async (req: Request, res: Response) => {
  const { name, surname, email, password, role } = req.body;

  const user = new UserModel({
    name,
    surname,
    email,
    password,
    role,
  });

  user.password = setBCrypt(password);

  await user.save();

  res.status(201).json({
    message: "Crear usuario exitoso!",
    data: {
      user,
    },
  });
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { password, email, _id, ...data } = req.body;

  const user = await UserModel.findByIdAndUpdate(id, data);

  res.json({
    message: "Usuario actualizado exitoso!",
    data: user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await UserModel.findByIdAndUpdate(id, { status: false });

  res.json({
    message: "Usuarios eliminado",
    data: user,
  });
};
