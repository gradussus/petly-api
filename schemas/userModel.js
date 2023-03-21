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
      match: [
        /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
        "Please enter a date as 20.12.2021",
      ],
    },
    favoriteList: {
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
