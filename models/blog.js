// BlogModel.js
import { Schema, models, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  imageLink: {
    type: String,
    required: true,
  },
  externalLink: {
    type: String,
    required: true,
  },
});

const BlogModel = models.Blog || model("Blog", blogSchema);

export { BlogModel };
