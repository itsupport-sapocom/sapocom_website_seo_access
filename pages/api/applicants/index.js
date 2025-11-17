import { connectToDatabase } from "@/lib/db";
import { ApplicantModel } from "@/models/applicant";

import formidable from "formidable";
import path from "path";

import { protectRoute } from "@/lib/auth";

import sendMail from "@/lib/email";

export const config = {
  api: {
    bodyParser: false,
  },
};

// GET /api/applicants
const handler = async function (req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const applicants = await ApplicantModel.find({
        isDeleted: false,
      });

      res.status(200).json(applicants);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const form = formidable({
        uploadDir: path.join(process.cwd(), "public", "uploads"),
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form data:", err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        const fieldsObject = {};

        for (const key in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, key)) {
            fieldsObject[key] = fields[key][0];
          }
        }

        const resume = files.resume[0].newFilename;

        await connectToDatabase();

        const newApplicant = await ApplicantModel.create({
          ...fieldsObject,
          resume,
        });

        res.status(201).json(newApplicant);

        await sendMail(newApplicant);
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      await ApplicantModel.findByIdAndUpdate(
        req.query.id,
        { isDeleted: true },
        { new: true }
      );

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
