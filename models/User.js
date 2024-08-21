const { registerValidator, loginValidator } = require("@/validators/auth");
const {
  removeUserValidator,
  banUserValidator,
  updateUserValidator,
  changeUserRoleValidator,
  editUserValidator
} = require("@/validators/user");
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
      unique: true,
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
userSchema.statics.loginValidation = function (body) {
  return loginValidator.validate(body);
};


//* panel
userSchema.statics.removeUserValidation = function (body) {
  return removeUserValidator.validate(body);
};
userSchema.statics.banUserValidation = function (body) {
  return banUserValidator.validate(body);
};
userSchema.statics.updateUserValidation = function (body) {
  return updateUserValidator.validate(body);
};
userSchema.statics.changeUserRoleValidation = function (body) {
  return changeUserRoleValidator.validate(body);
};
userSchema.statics.editUserValidation = function (body) {
  return editUserValidator.validate(body);
};


const model = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = model;
