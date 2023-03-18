const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// const passwordRegexp =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-_])\S{7,32}$/gm;
// const phoneRegexp = /^\+?3?8?(0\d{9})$/;

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
  },
  { versionKey: false, timestamps: true }
);

const joiUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiUserSchema };
