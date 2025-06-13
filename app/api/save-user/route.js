import mongoose from "mongoose";
import User from "@/models/User";
import connectDb from "@/db/connectDB";

export async function POST(req) {
  const { username, email, joinedCommunities, profilepic, clerkId } = await req.json();

  if (!username||!clerkId) {
    return new Response("Username and clerkId are required", { status: 400 });
  }

  await connectDb();

  const existingUser = await User.findOne({ username });

  if (!existingUser) {
    await User.create({
      clerkId,
      username,
      email,
      joinedCommunities:joinedCommunities||[],
      profilepic,
    });

    return new Response("User created", { status: 201 });
  }

  return new Response("User already exists", { status: 200 });
}