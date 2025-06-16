"use client";
import Button from "@/components/ui/button";
import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ToastContainer,toast,Slide } from "react-toastify";

const Join = () => {
  const [Code, setCode] = useState("");
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSignedIn === false) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [isSignedIn, router]);

  if (isSignedIn === false) {
    // While redirecting, don't render anything
    return (
      <div className="text-center font-bold text-2xl mt-30">
        Please Sign In to continue
      </div>
    );
  }

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/join-community", {
      method: "POST",
      body: JSON.stringify({ code: Code }),
      credentials: "include",
    });
    setIsLoading(false);

    if (res.ok) {
      setCode("");
      toast("Community Joined")
      setTimeout(() => {
        router.push("/");
        
      }, 3000);
      
    } else {
      const data = await res.json();
      setError(data.error || "Unexpected error occurred. Redirecting...");

      setTimeout(() => {
        // router.push("/");
      }, 3000);
    }

    // if(!res.ok)
    // {
    //     setError("Unexpected error occurred. Redirecting...");
    //     setTimeout(() => {
    //         router.push("/")

    //     }, 3000);

    //      return (
    //         error && <div className="text-center font-bold text-2xl mt-30 text-red-500">{error}</div>
    //      )
    // }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mt-4 p-2 rounded-md bg-red-100 border border-red-400 text-red-700 animate-pulse transition-all duration-300">
            {error}
          </div>
        )}
        <div className="relative">
          <input
            id="code"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text "
            placeholder=""
            name="group"
            value={Code}
            onChange={handleChange}
          ></input>
          <label
            htmlFor="code"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Join
          </label>
        </div>
        <div className="m-10">
          <Button
            type="submit"
            title={isLoading ? "Joining..." : "Join"}
            disabled={isLoading}
          />
        </div>
      </form>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
    </div>
  );
};

export default Join;
