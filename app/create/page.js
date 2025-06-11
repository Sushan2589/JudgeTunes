"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import Button from "@/components/ui/button";
import  { useRouter } from "next/navigation";

const create = () => {
    const router = useRouter()
  const [form, setForm] = useState({ group: "", description: "" });
  //   const [roomCode, setRoomCode] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/createCommunity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.group,
        description: form.description,
      }),
    });

    if (res.ok) {
      setForm({ group: "", description: "" });
      toast("Community Created");
      router.push("/")
    }

    const data = await res.json();
    console.log(data); // community created
  };

  //   useEffect(() => {
  //     const code = nanoid(8);
  //     setRoomCode(code);
  //   }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 ">
          <div className="relative">
            <input
              id="Gname"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text "
              placeholder=""
              name="group"
              value={form.group}
              onChange={handleChange}
            ></input>
            <label
              htmlFor="Gname"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Group Name
            </label>
          </div>

          <div className="relative">
            <input
              id="Gdesc"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              placeholder=""
              name="description"
              value={form.description}
              onChange={handleChange}
            ></input>
            <label
              htmlFor="Gdesc"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Group Description
            </label>
          </div>

          {/* <div className="relative">
            <input
              id="code"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              readOnly
              value={roomCode}
            ></input>
            <label
              htmlFor="code"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 :"
            >
              Room Code
            </label>
            </div> */}

          <div className="m-10">
            <Button title="Submit" type="submit" />
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </div>
    </div>
  );
};

export default create;
