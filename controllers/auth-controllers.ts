import { Request, Response } from "express";
import { UserModel } from "../models";
import { getBCryptCompare } from "../helpers/crypt";
import generatorJWT from "../helpers/generator-jwt";

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user || !user?.status) {
      return res.status(400).json({
        message: "Correo / contraseña no son correctos",
      });
    }

    if (!getBCryptCompare(password, user.password)) {
      return res.status(400).json({
        message: "Correo / contraseña no son correctos",
      });
    }

    const accessToken = await generatorJWT(`${user._id}`);

    res.status(200).json({
      message: "Login exitoso!",
      token: accessToken,
      data: user,
    });
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    res.status(500).json({
      message: "Error interno",
    });
  }
};
