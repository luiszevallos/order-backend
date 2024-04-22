import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre es obligatorio"],
  },
  surname: {
    type: String,
    required: [true, "Apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "Correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Contraseña es obligatorio"],
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    required: [true, "El Rol es obligatorio"],
  },
  image: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  return {
    ...user,
    uid: _id,
  };
};

export default model("User", UserSchema);
