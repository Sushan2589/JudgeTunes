import React from "react";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import Button from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

const CommunityPage = async ({ params }) => {
  const { userId } = await auth(); // Clerk-authenticated user
  console.log(userId);
  if (!userId)
    return (
      <div className="text-center font-bold text-3xl mt-30 text-red-500">
        Login to continue
      </div>
    );
  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("JudgeTunes-dev");

  let community;
  try {
    community = await db
      .collection("communities")
      .findOne({ _id: ObjectId.createFromHexString(id) });
  } catch (err) {
    return notFound();
  }

  if (!community) {
    return notFound(); // No community found
  }

  const isMember = community.members.includes(userId);
  if (!isMember)
    return (
      <div className="text-center font-bold text-3xl mt-30 text-red-500">
        You must join this community to view its content.
      </div>
    );

  const membersData = await db
    .collection("users")
    .find({
      clerkId: { $in: community.members },
    })
    .toArray();

  const userMap = {};
  membersData.forEach((user) => {
    userMap[user.clerkId] = user;
  });




  return (
    <>
        <h1 className="text-center font-bold text-3xl">{community.name}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-2">
  Share this community code to invite others:
  <span className="ml-1 font-mono text-[#616467] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-xl font-bold text-xl">
    PTPQa
  </span>
</p>
      <div className="parent m-10">
        <div className="div1">
            
         
          <div className="font-bold text-xl mb-3 flex justify-center">
            Playlist
          </div>
          <div className="flex justify-center">
            <Link href={`/create-song/${community._id}`}>
              <Button title="Add Song" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            
            {community.songs?.map((song, index) => (
              <div key={index} className="bg-white shadow px-4 py-2 rounded">
                <div className="text-lg font-semibold">{song.title}</div>
                <div className="text-sm text-gray-500">
                  Added by: @{userMap[song.by]?.username || "unknown"}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="div2">
            
          <span className="font-bold text-xl ">Members</span>
          <div className="flex flex-col mt-5 gap-5 ">
            {membersData.map((user) => (
              <div key={user.clerkId}>
                <div className="flex gap-2 text-lg font-medium items-center">
                  <div className="w-10 h-10">
                    <img className="rounded-full" src={user.profilepic}></img>
                  </div>

                  <div>@{user.username}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

  

export default CommunityPage;



