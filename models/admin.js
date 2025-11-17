import { Schema, models, model } from "mongoose";

const adminSchema = Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    select: false,
    minlength: 8,
  },
  otp: {
    type: Number,
    select: false,
  },
});

const AdminModel = models.Admin || model("Admin", adminSchema);

export { AdminModel };
