import jwt from "jsonwebtoken";

const generatorJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRET_KEY_JWT || "",
      (err: Error | null, token: string | undefined) => {
        if (err) {
          reject("No se puedo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default generatorJWT;
