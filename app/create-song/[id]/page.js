"use client";
import Button from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";


const CreateSongPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add-song", {
      method: "POST",
      body: JSON.stringify({ title, description, communityId: id }),
    });

    if (res.ok) {
      
      router.push(`/group/${id}`);
    } else {
      alert("Failed to add song");
    }
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-5">Add a Song</h1>
      <div className="flex justify-center items-center mt-10">
      <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       


        <div className="relative">
            <input
              id="Title"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text "
              placeholder=""
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label
              htmlFor="Title"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Title
            </label>
          </div>


           <div className="relative">
            <input
              id="Description"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text "
              placeholder=""
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <label
              htmlFor="Description"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Description (Optional)
            </label>
          </div>
        <div className="m-10">
            <Button title="Add a Song" type="submit" />
          </div>
      </form>
      
      </div>
      </div>
    </div>
  );
};

export default CreateSongPage;
