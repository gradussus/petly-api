const { Schema, model, SchemaTypes } = require("mongoose");

const petSchema = Schema(
  {
    petName: {
      type: String,
      required: [true, "Please, enter name for a pet"],
    },
    birthDate: {
      type: String,
      required: [true, "Please enter a date as 20.12.2021"],
    },
    breed: {
      type: String,
      required: [true, "Please, enter breed for a pet"],
    },
    imageURL: {
      type: String,
      required: [true, "PhotoURL is required"],
    },
    comments: {
      type: String,
      required: [true, "Please, enter some comments..."],
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Pet = model("pet", petSchema);

module.exports = { Pet };
