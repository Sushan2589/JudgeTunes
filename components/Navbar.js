"use client";

import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import SignIn from "./ui/signIn";
import SignUp from "./ui/signUp";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 sm:p-10 rounded-4xl m-4 sm:m-8">
      <div>
        <Link href="/" className="text-xl font-bold"><Logo/></Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <SignedOut>
          <div className="flex gap-4 sm:gap-6">
            <SignInButton mode="modal">
              <div>
                <SignIn />
              </div>
            </SignInButton>
            <SignUpButton mode="modal">
              <div>
                <SignUp />
              </div>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <Link href="/my-communities">
              <div
                className="py-2.5 px-5 text-sm font-medium text-black rounded-full border border-[#616467] hover:bg-[#616467] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#616467] dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600 dark:hover:text-white transition duration-200 text-center"
              >
                Communities
              </div>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 sm:w-16 sm:h-16",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
