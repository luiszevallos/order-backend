import {
  CategoryModel,
  CustomerModel,
  ProductModel,
  RoleModel,
  UserModel,
} from "../models";

export const isRoleValid = async (id: string) => {
  const role = await RoleModel.findById(id);
  if (!role) {
    throw new Error("Rol no existe");
  }
  return true;
};

export const emailExist = async (email: string) => {
  const exist = await UserModel.findOne({ email });
  if (exist) {
    throw new Error("Correo electrónico ya está registrado");
  }
  return true;
};

export const existUserId = async (id: string) => {
  const user = await UserModel.findById(id);
  if (!user || user?.status) {
    throw new Error("El ID no existe");
  }
  return true;
};

export const existCategoryId = async (id: string) => {
  const category = await CategoryModel.findById(id);
  if (!category || category?.status) {
    throw new Error("El ID no existe");
  }
  return true;
};

export const existProductId = async (id: string) => {
  const product = await ProductModel.findById(id);
  if (!product || product?.status) {
    throw new Error("El ID no existe");
  }
  return true;
};

export const existCustomerId = async (id: string) => {
  const customer = await CustomerModel.findById(id);
  if (!customer || customer?.status) {
    throw new Error("El ID no existe");
  }
  return true;
};
