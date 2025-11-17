import { AdminModel } from "@/models/admin";
import { setTokenCookie } from "@/lib/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  const jwtSecret = process.env.JWT_SECRET || "secret";
  const jwtExpires = process.env.JWT_EXPIRES_IN || "1d";
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, password } = req.body;

  try {
    await connectToDatabase();

    const existingUser = await AdminModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new AdminModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
      expiresIn: jwtExpires,
    });

    setTokenCookie(res, token);

    return res.status(201).json({ newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
