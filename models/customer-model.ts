import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre es obligatorio"],
  },
  document: {
    type: {
      type: String,
      required: [true, "Tipo de documento es obligatorio"],
    },
    number: {
      type: String,
      required: [true, "Número de documento es obligatorio"],
      unique: true
    },
  },
  address: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

CustomerSchema.methods.toJSON = function () {
  const { __v, ...customer } = this.toObject();
  return customer;
};

export default model("Customer", CustomerSchema);
