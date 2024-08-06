"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const ProfileCard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    //TODO : replace with skeleton
    return <div>Loading...</div>;
  }

  if (!session.data?.user) {
    router.push("/");
    return null;
  }

  return (
    <div className="pt-8 flex justify-center">
      <div className="max-w-4xl bg-white rounded shadow w-full p-12">
        <Greeting
          image={session.data?.user?.image ?? ""}
          name={session.data?.user?.name ?? ""}
        />
        <Assets />
      </div>
    </div>
  );
};
function Assets() {
  return <div className="text-slate-500 mt-4">Account assests</div>;
}

function Greeting({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex">
      {/* eslint-disable-next-line */}
      <img src={image} className="rounded-full w-16 h-16 mr-4" />
      <div className="text-2xl font-semibold flex flex-col justify-center">
        Welcome back, {name}
      </div>
    </div>
  );
}