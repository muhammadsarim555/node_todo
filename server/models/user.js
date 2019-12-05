const mongoose = require("mongoose");
const validator = require('validator');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema( {
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
})

UserSchema.methods.generateAuthToken = function () {
  var user = this
  var access = 'auth'
  var token = jwt.sign({_id: user._id.toHexString(),access}, 'abc123').toString()

  user.tokens.push({access, token})

  return user.save().then(() => {
    return token
  })

}

const User = mongoose.model("Users", UserSchema);

module.exports = { User };
