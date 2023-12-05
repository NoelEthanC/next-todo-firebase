"use client";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

const AuthSection = ({ session }: { session: Session | null }) => {
  const [position, setPosition] = useState("");
  const router = useRouter();
  return (
    <>
      {session ? (
        <div className="flex justify-between ">
          <Button
            variant={"outline"}
            onClick={() => router.push("/create")}
            className="bg-gray-950 mx-4 "
          >
            {" "}
            Create Task
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  className="cursor-pointer "
                  width={100}
                  height={100}
                  src={`${session.user?.image}`}
                />
                <AvatarFallback>NE</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  {session.user?.name}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onClick={() => signOut()}
                  className="cursor-pointer "
                  value="bottom"
                >
                  Logout
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button
          variant={"outline"}
          onClick={() => signIn("google")}
          className="bg-gray-900"
        >
          {" "}
          Sign In
        </Button>
      )}
    </>
  );
};

export default AuthSection;
