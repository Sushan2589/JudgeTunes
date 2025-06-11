import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedCommunities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Community" }],
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);