// Import necessary modules
import { connectToDatabase } from "@/lib/db";
import { BlogModel } from "@/models/blog";
const { protectRoute } = require("@/lib/auth");

// GET /api/blogs
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      //getting blogs if query is present
      const blogs = await BlogModel.find({
        isDeleted: false,
        ...(req.query && req.query),
      });

      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const newBlog = await BlogModel.create(req.body);

      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const updatedBlog = await BlogModel.findByIdAndUpdate(
        req.query.id,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      await BlogModel.findByIdAndUpdate(
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
