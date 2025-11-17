import { MONGODB_URL } from "@/configs/config";
import { connect } from "mongoose";

export async function connectToDatabase() {
  try {
    await connect(MONGODB_URL);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
