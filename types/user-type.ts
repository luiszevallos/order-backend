import { ObjectId } from "mongoose";

export type IUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: ObjectId;
  status: boolean;
  image?: string;
};
