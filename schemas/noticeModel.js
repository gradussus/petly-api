const { Schema, model, SchemaTypes } = require("mongoose");
const { handleMongooseError } = require("../helpers/apiHelpers");

const noticeSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost-found", "in-good-hands"],
      default: "sell",
      required: [true, "Category is required"],
    },
    title: {
      type: String,
      minLength: 2,
      maxLength: 48,
      //trim: true,
      required: [true, "Title is required"],
    },
    name: {
      type: String,
      minLength: 2,
      maxLength: 16,
      //trim: true,
      match: [
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
        "Only letters can be accepted",
      ],
      required: [true, "Name is required"],
    },
    birthDate: {
      type: String,
      //type: Date,
      match: [
        /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
        "Please enter a date as 20.12.2021",
      ],
    },
    breed: {
      type: String,
      minLength: 2,
      maxLength: 24,
      //trim: true,
      match: [
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
        "Only letters can be accepted",
      ],
      required: [true, "Breed is required"],
    },

    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Sex is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      match: [
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇґҐ]+),\s[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/,
        "Should be at least two words separated by string",
      ],
    },
    comments: {
      type: String,
      minLength: 8,
      maxLength: 120,
      required: [true, "Comment is required"],
    },
    price: {
      type: Number,
      min: 0,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
    imageURL: {
      type: String,
      required: [true, "PhotoURL is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
noticeSchema.post("save", handleMongooseError);
const Notice = model("notice", noticeSchema);
module.exports = { Notice };
