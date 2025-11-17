import { AdminModel } from "@/models/admin";

import { connectToDatabase } from "@/lib/db";

import nodemailer from "nodemailer";

const data = {
  MAIL_EMAIL: "sapocomwebsiteform@gmail.com",
  MAIL_PASSWORD: "misukhzojcklpkop",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email } = req.body;

  try {
    await connectToDatabase();

    const user = await AdminModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "USER NOT FOUND" });
    }

    const generatedOTP = Math.floor(100000 + Math.random() * 900000);

    user.otp = generatedOTP;

    await user.save();

    // Creating Transporter for sending mail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: data.MAIL_EMAIL,
        pass: data.MAIL_PASSWORD,
      },
    });

    // Sending mail to user
    await transporter.sendMail({
      from: data.MAIL_EMAIL, // sender address
      to: user.email, // list of receivers
      subject: `Sapocom User OTP Request!`, // Subject line
      html: `<h1>OTP: ${generatedOTP}</h1>`,
    });

    return res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
