"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>; // Display a loading state while session is being fetched
  }

  if (!session) {
    return <p>No user found</p>; // Handle case when there's no session
  }

  return (
    <Image
      src={session?.user?.image || "/default-profile.png"} // Provide a fallback image
      width={24}
      height={24}
      alt="User Profile Image"
      className="rounded-full"
    />
  );
}
