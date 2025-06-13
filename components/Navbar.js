"use client"

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

const Navbar = () => {
  return (
    <nav className="flex justify-between p-10 rounded-4xl m-8">
      <div>
        <Link href="/">JudgeTunes</Link>
      </div>
      <div>
        {" "}
        {/*OUTER DIV IF WANT TO ADD EXTRA CONTENT IN NAVBAR style here */}
        {/* <div>
         <ul className="flex gap-8">
          <li>HOME</li>
          <li>CONTACT</li>
        </ul> 
        </div>
         */}
        <SignedOut>
          <div className="flex gap-6">
            {/*all content of signedout in this div */}
            <div>
              {/*Sign In button */}
              <SignInButton mode="modal">
                <div>
                <SignIn />
                </div>
              </SignInButton>
            </div>
            <div>
              {/*Sign Up button */}
              <SignUpButton mode="modal">
                <div>
                <SignUp />
                </div>
              </SignUpButton>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-16 h-16", // Tailwind classes for 64x64 px, or use inline styles
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
