import connectDb from "@/db/connectDB";
import Community from "@/models/Community";
import { nanoid } from "nanoid";

export async function POST(req) {
  await connectDb();
  const { name, description } = await req.json();

  let code;
  let exists = true;

  // Keep generating a new code until it is unique
  while (exists) {
    code = nanoid(8);
    exists = await Community.findOne({ code });
  }

  const community = await Community.create({
    name,
    description,
    code,
  });

  return new Response(JSON.stringify(community), { status: 201 });
}
