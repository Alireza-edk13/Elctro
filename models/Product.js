const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
