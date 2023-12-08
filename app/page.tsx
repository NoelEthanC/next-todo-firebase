import { Suspense } from "react";
import TodoSkeleton from "@/components/skeletons/TodoSkeleton";
import CardWrapper from "@/components/main/CardWrapper";
import { InputWithButton } from "@/components/main/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";

export default async function Home() {
  return (
    <main className="max-w-xl mx-auto ">
      <InputWithButton />
      <Suspense fallback={<TodoSkeleton />}>
        <CardWrapper />
      </Suspense>
    </main>
  );
}
