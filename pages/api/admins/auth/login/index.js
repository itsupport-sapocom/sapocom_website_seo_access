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

  const { email, password } = req.body;

  try {
    await connectToDatabase();

    const user = await AdminModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: jwtExpires,
    });

    setTokenCookie(res, token);

    user.password = undefined;

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
