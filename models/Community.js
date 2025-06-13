import mongoose from "mongoose";


const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true }, // random code
  description: { type: String },
 members: [String],
  songs: [{
    title: String,
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

export default mongoose.models.Community || mongoose.model("Community", communitySchema);
