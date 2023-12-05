"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createTodo } from "@/lib/actions";
export default function CreatePage() {
  return (
    <form
      action={createTodo}
      className="max-w-xl mx-auto text-white mt-6 p-6 bg-gray-950 rounded-md "
    >
      <div className="grid gap-4 py-4 mx-auto ">
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
      <div className="flex w-full justify-end ">
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  );
}
