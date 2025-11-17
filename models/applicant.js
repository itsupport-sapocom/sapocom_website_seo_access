// ApplicantModel.js
import { Schema, models, model } from "mongoose";

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    lowercase: true,
    trim: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
    minLength: 10,
  },
  resume: {
    type: String,
    required: true,
  },
  relevantExperience: {
    type: String,
    required: true,
    trim: true,
  },
  highestGraduation: {
    type: String,
    required: true,
    trim: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  jobApplied: {
    type: Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
});

const ApplicantModel = models.Applicant || model("Applicant", applicantSchema);

export { ApplicantModel };
