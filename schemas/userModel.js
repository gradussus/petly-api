const { Schema, model } = require("mongoose");

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
    birthDate: {
      type: String,
    },
    favoriteList: {
      type: Array,
      ref: "notice",
      default: [],
    },
    notices: {
      type: Array,
      ref: "notice",
      default: [],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = { User };
