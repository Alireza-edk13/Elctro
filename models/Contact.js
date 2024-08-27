import { contactValidator } from "@/validators/contact";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//* add yup validation method to mongoose statics
//* auth
schema.statics.contactValidation = function (body) {
  return contactValidator.validate(body)
};

const model = mongoose.models.Contact || mongoose.model("Contact", schema);

export default model;
