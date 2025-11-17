import { AdminModel } from "@/models/admin";
import bcrypt from "bcryptjs";

import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, newPassword, otp } = req.body;

  try {
    await connectToDatabase();

    const user = await AdminModel.findOne({ email, otp }).select("+otp");

    if (!user) {
      return res.status(400).json({ message: "INVALID OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({ message: "Paasword changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
