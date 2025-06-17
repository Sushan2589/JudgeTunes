// app/api/join-community/route.js
import { getAuth } from '@clerk/nextjs/server';
import clientPromise from '@/lib/mongodb'; // Your MongoDB utility



export async function POST(req) {
  const {userId} = getAuth(req); 
  console.log('User ID:', userId);

 

  if (!userId) {  
   return new Response(JSON.stringify({ error: 'Some internal error occured | Unauthorized' }), {
  status: 401,
  headers: { 'Content-Type': 'application/json' },
});;
  }

  const { code } = await req.json(); // Room code entered by user
  if (!code) {
    return new Response(JSON.stringify({ error: 'No code entered' }), {
  status: 400,
  headers: { 'Content-Type': 'application/json' },
});
  }

  const client = await clientPromise;
  const db = client.db('JudgeTunes-dev');
  const community = await db.collection('communities').findOne({ code });
  


   
  

  if (!community) {
    return new Response(JSON.stringify({ error: 'Community not found' }), {
  status: 404,
  headers: { 'Content-Type': 'application/json' },
});
  }

  // Check if user is already in the members array
  const alreadyMember = community.members?.includes(userId);
  if (alreadyMember) {
    return new Response(JSON.stringify({ error: 'Already a member' }), {
  status: 409,
  headers: { 'Content-Type': 'application/json' },
})
  }


 
  // Add user to the members array  
  await db.collection('communities').updateOne(
    { code },
    { $addToSet: { members: userId } } // $addToSet avoids duplicates
  );
  
  
  console.log(community.code)

  await db.collection('users').updateOne(
  {clerkId:userId},
  { $addToSet: { joinedCommunities: community.code } }
);



  return new Response('Joined successfully', { status: 200 });
}