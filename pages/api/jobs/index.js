// Import necessary modules
import { connectToDatabase } from "@/lib/db";
import { JobModel } from "@/models/job";
const { protectRoute } = require("@/lib/auth");

// GET /api/jobs
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      // const jobs = await JobModel.find({
      //   isDeleted: false,
      // });

      //getting jobs if query is present
      const jobs = await JobModel.find({
        isDeleted: false,
        ...(req.query && req.query),
      });

      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const newJob = await JobModel.create(req.body);

      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const updatedJob = await JobModel.findByIdAndUpdate(
        req.query.id,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      await JobModel.findByIdAndUpdate(
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
}
