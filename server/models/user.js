const mongoose = require("mongoose");
const validator = require('validator');

const User = mongoose.model("Users", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: value => {
        return validator.isEmail(value);
      },
      message: `{VALUE} is not valid email!`
    }
  },
  password: { type: String, required: true }
  , tokens: [{ access: { type: String, required: true }, tokens: { type: String, required: true } }]
});

module.exports = { User };
