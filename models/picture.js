// PictureModel.js
import { Schema, models, model } from "mongoose";

const pictureSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  cloudinaryImageId: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const PictureModel = models.Picture || model("Picture", pictureSchema);

export { PictureModel };
