import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "La categoría es obligatoria"],
  },
  name: {
    type: String,
    required: [true, "Nombre es obligatorio"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Descripción es obligatorio"],
  },
  price: {
    type: Number,
    required: [true, "El precio es obligatorio"],
  },
  image: {
    type: [String],
  },
  available: {
    type: Boolean,
    default: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

ProductSchema.methods.toJSON = function () {
  const { __v, ...product } = this.toObject();
  return product;
};

export default model("Product", ProductSchema);
