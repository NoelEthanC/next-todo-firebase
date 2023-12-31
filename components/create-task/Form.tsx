"use client";

import React from "react";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createTodo } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { SpinnerCircular } from "spinners-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <Button type="submit" disabled={pending} className="flex space-x-2 ">
      {pending ? <SpinnerCircular color="#fff" /> : <>Save changes</>}
    </Button>
  );
};

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await createTodo(formData);
    router.back();
  };
  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Create Todo</DialogTitle>
        <DialogDescription>
          Make a todo task here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="task" className="text-right">
            Task
          </Label>
          <Input
            required
            id="task"
            name="task"
            placeholder="task"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="description"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            From
          </Label>
          <Input
            id="from"
            name="from"
            defaultValue="08:00"
            className="col-span-3"
            type="time"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            To
          </Label>
          <Input
            id="to"
            name="to"
            defaultValue="08:00"
            className="col-span-3"
            type="time"
          />
        </div>
      </div>
      {/* <DialogFooter> */}
      <SubmitButton />
      {/* </DialogFooter> */}
    </form>
  );
};

export default Form;
