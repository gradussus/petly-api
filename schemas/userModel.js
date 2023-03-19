const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Set email address for user"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: [true, "Set mobile for user"],
    },
    birthData: {
      type: String,
      default: "00.00.0000",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   try {
//     const user = this;
//     if (!user.isModified("password")) next();
//     const hashPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
//     this.password = hashPassword;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });
// userSchema.methods.matchPassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
const nameRegexp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegexp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-_])\S{7,32}$/;
const phoneRegexp = /^\+380\d{9}$/;
const cityRegexp = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;

const joiUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).min(7).max(32).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  city: Joi.string().pattern(cityRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiUserSchema, joiLoginSchema };
