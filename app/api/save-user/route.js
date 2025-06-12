import mongoose from "mongoose";
import User from "@/models/User";
import connectDb from "@/db/connectDB";

export async function POST(req) {
  const { username, email, joinedCommunities, profilepic } = await req.json();

  if (!username) {
    return new Response("Username is required", { status: 400 });
  }

  await connectDb();

  const existingUser = await User.findOne({ username });

  if (!existingUser) {
    await User.create({
      username,
      email,
      joinedCommunities,
      profilepic,
    });

    return new Response("User created", { status: 201 });
  }

  return new Response("User already exists", { status: 200 });
}