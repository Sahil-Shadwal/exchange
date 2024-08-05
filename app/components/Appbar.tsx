"use client";

import React from "react";
import { PrimaryButton } from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  return (
    <div className="border-b px-2 py-2 flex justify-between">
      <div className="text-xl font-bold flex flex-col justify-center">DCEX</div>
      <div>
        {session.data?.user ? (
          <PrimaryButton onClick={() => signOut()}>Logout</PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => signIn()}>Sign in</PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default Appbar;
