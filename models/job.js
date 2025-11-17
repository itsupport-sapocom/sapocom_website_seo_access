// JobModel.js
import { Schema, models, model } from "mongoose";

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  place: {
    type: String,
    required: true,
    trim: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const JobModel = models.Job || model("Job", jobSchema);

export { JobModel };
