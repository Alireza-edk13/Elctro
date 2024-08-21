const categoryValidator = require("@/validators/category");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


//* add yup validation method to mongoose statics
categorySchema.statics.categoryValidation = function (body) {
  return categoryValidator.validate(body);
};

const model = mongoose.models.Category ||  mongoose.model("Category", categorySchema);

module.exports = model;
