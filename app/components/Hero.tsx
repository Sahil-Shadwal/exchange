"use client";
import React from "react";
import { SecondaryButton } from "./Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      <div className="text-6xl font-medium">
        <span>The Indian Crypto </span>
        <span className="text-blue-600">Exchange</span>
      </div>
      <div>
        <p className="text-2xl mt-4 flex justify-center items-center text-gray-500">
          Create a frictionless wallet from India with just a Google Account
        </p>
        <p className="text-2xl flex justify-center items-center text-gray-500">
          Convert your INR into Cryptocurrency{" "}
        </p>
      </div>
      <div className="pt-8 flex justify-center items-center">
        {session.data?.user ? (
          <SecondaryButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to dahboard
          </SecondaryButton>
        ) : (
          <SecondaryButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login with Google
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default Hero;
