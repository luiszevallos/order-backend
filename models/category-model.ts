import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "Descripción es obligatorio"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

CategorySchema.methods.toJSON = function () {
  const { __v, ...category } = this.toObject();
  return category;
};

export default model("Category", CategorySchema);
