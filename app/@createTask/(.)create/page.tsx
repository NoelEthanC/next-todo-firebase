"use client";

import Form from "@/components/create-task/Form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTodo } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CreatePage() {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className=" text-gray-200  sm:max-w-[425px]">
        <Form />
      </DialogContent>
    </Dialog>
  );
}
