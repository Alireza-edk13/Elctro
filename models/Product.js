import { createProductValidator, removeProductValidator } from "@/validators/product";

const mongoose = require("mongoose");
require("./Category");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    orginalPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0
    },
    stock: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      require: true,
    },

  },
  { timestamps: true }
);

schema.statics.createProductValidation = function (body) {
  return createProductValidator.validate(body);
};
schema.statics.removeProductValidation = function (body) {
  return removeProductValidator.validate(body);
};


const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
