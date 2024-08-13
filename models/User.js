const { registerValidator, loginValidator } = require("@/validators/auth");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    refreshToken: String,
  },
  { timestamps: true }
);

//* add yup validation method to mongoose statics
//* auth
userSchema.statics.registerValidation = function (body) {
  return registerValidator.validate(body)
};


const model = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = model;
