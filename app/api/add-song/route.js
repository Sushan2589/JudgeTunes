// app/api/add-song/route.js

import { getAuth } from "@clerk/nextjs/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  const { userId } = getAuth(req);
  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { title, description, communityId } = await req.json();

  if (!title || !communityId) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("JudgeTunes-dev");

  const song = {
    title,
    description,
    by: userId,
    addedAt: new Date(),
  };

  await db.collection("communities").updateOne(
    { _id: ObjectId.createFromHexString(communityId) },
    { $push: { songs: song } }
  );

  return new Response("Song added", { status: 200 });
}
