import connectDb from "@/db/connectDB";
import Community from "@/models/Community";
import { nanoid } from "nanoid";
import { getAuth } from '@clerk/nextjs/server';
import User from "@/models/User";

export async function POST(req) {
  try {
    const {userId} = getAuth(req); 

     if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }


    await connectDb();
    const { name, description } = await req.json();

    let code;
    let exists = true;

    while (exists) {
      code = nanoid(5);
      exists = await Community.findOne({ code });
    }

    const community = await Community.create({
      name,
      description,
      code,
      members: [userId],
    });

    await User.findOneAndUpdate(
      { clerkId: userId }, 
      { $addToSet: { joinedCommunities: community._id } }
    );

    return new Response(JSON.stringify(community), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating community:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
