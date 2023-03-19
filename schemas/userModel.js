const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
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
    avatarURL: {
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

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

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

const joiUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiUserSchema, joiLoginSchema };
