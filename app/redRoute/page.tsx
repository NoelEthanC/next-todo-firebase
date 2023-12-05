"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  useEffect(()=>{

    router.push("/");
  }, [])
  return null;
};

export default page;
