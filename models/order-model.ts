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
  image: {
    type: String,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
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
