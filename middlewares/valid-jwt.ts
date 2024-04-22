import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";

const validJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.header("Authentication") || "";
    const token = header.split(" ")[0];

    if (!token) {
      return res.status(401).json({
        message: "No hay token en la petición",
      });
    }

    const { uid } = jwt.verify(token, process.env.SECRET_KEY || "") as {
      uid: string;
    };

    const user = await UserModel.findById(uid);

    if (!user || !user.status) {
      return res.status(401).json({
        message: "Token no válido - 1",
      });
    }

    next();
  } catch (error) {
    console.log("🚀 ~ validJWT ~ error:", error);
    return res.status(401).json({
      message: "Token no válido",
    });
  }
};

export default validJWT;
