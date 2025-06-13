import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  joinedCommunities: [String],
  profilepic: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);