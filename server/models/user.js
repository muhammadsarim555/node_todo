const mongoose = require("mongoose");

const User = mongoose.model("Users", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  password: { type: Number, default: 2222 }
});

module.exports = { User };
