import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import clientPromise from "@/lib/mongodb";

const MyCommunitiesPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="text-center font-bold text-3xl mt-30 text-red-500">
        Login to view Communities
      </div>
    );
  }

  const client = await clientPromise;
  const db = client.db("JudgeTunes-dev");

  const user = await db.collection("users").findOne({ clerkId: userId });
  if (!user) {
    return (
      <div className="text-center font-bold text-3xl mt-30 text-red-500">
        No User Found
      </div>
    );
  }

  const joinedCommunityIds = user.joinedCommunities || [];
  console.log(joinedCommunityIds);

  const communities = await db
    .collection("communities")
    .find({ code: { $in: joinedCommunityIds } })
    .toArray();
  console.log("found communities", communities.length);

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-5">My Communities</h1>
      <div className="flex flex-col gap-4">
        {communities.map((community) => (
          <Link
            key={community._id.toString()}
            href={`/group/${community._id}`}
            title="Click to view community"
           className="p-4 bg-white shadow-md rounded hover:bg-gray-100 transition cursor-pointer"


          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold">{community.name}</div>
                <div className="text-sm text-gray-500">{community.description}</div>
              </div>
              <div className="text-gray-400 text-xl">→</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCommunitiesPage;
