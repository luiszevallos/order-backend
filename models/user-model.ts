import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre es requerido"],
  },
  surname: {
    type: String,
    required: [true, "Apellido es requerido"],
  },
  email: {
    type: String,
    required: [true, "Correo es requerido"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Contraseña es requerido"],
  },
  image: {
    type: String,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
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
