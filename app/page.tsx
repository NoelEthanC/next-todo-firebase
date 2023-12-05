import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { InputWithButton } from "@/components/main/Form";
import CardWrapper from "@/components/main/CardWrapper";
import { Suspense } from "react";
import TodoSkeleton from "@/components/skeletons/TodoSkeleton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // console.log(session, "my-session");

  return (
    <main className="max-w-xl mx-auto ">
      <InputWithButton />
      <Suspense fallback={<TodoSkeleton />}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
