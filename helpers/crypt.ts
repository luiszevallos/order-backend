import bcrypt from "bcryptjs";

export const setBCrypt = (value: string) => {
  const salt = bcrypt.genSaltSync();

  return bcrypt.hashSync(value, salt);
};

export const getBCryptCompare = (value: string, hash: string) => {
  return bcrypt.compareSync(value, hash);
};
