import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre es obligatorio"],
  },
  code: {
    type: String,
    required: [true, "Código es obligatorio"],
  },
});

export default model("Role", RoleSchema);
