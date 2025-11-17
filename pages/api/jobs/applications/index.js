import { connectToDatabase } from "@/lib/db";
import { ApplicantModel } from "@/models/applicant";
const { protectRoute } = require("@/lib/auth");

// GET /api/jobs/applications
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const applicants = await ApplicantModel.find({
        isDeleted: false,
        jobApplied: req.query.id,
      });

      res.status(200).json(applicants);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
