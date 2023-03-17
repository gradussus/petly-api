const { Schema, model } = require("mongoose");
import { handleMongooseError } from "../helpers/apiHelpers";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const friendSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a name"],
    },
    url: {
      type: String,
      required: [true, "Please enter a website"],
    },
    addressUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    workDays: {
      type: Array,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      match: [emailRegexp, "Please enter a valid email address"],
    },
  },
  { versionKey: false, timestamps: true }
);

friendSchema.post("save", handleMongooseError);

export const Friend = mongoose.model("friend", friendSchema);
