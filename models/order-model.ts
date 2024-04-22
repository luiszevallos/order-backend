import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  id_producto: {
    type: Schema.Types.ObjectId,
    ref: "Producto",
    unique: true,
  },
  count: Number,
  delivered: Boolean,
});

const UserSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productos: [ProductSchema],
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
