"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateTodo } from "@/lib/actions";
import { TaskState, NewState } from "@/scripts/definitions";
import { useFormState } from "react-dom";

export type State = {
  message: string | null;
  errors: TaskState;
};

const Form = (props: any) => {
  const { todo } = props;
  const initial = {
    message: null,
    errors: {},
  };

  const updateTodoWithID = updateTodo.bind(null, todo.id);
  const [state, dispatch] = useFormState(updateTodoWithID, initial);
  return (
    <form
      action={dispatch}
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
            defaultValue={todo?.task}
          />
          <div className="">
            {state.errors.task && <p className="">{state.errors.task}</p>}
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="description"
            defaultValue={todo?.description}
            className="col-span-3"
          />
          <div className="">
            {state.errors.description && (
              <p className="">{state.errors.description}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            From
          </Label>
          <Input
            id="from"
            name="from"
            defaultValue={todo?.from}
            className="col-span-3"
            type="time"
          />
          <div className="">
            {state.errors.from && <p className="">{state.errors.from}</p>}
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            To
          </Label>
          <Input
            name="to"
            className="col-span-3"
            defaultValue={todo?.to}
            type="time"
          />
          <div className="">
            {state.errors.to && <p className="">{state.errors.to}</p>}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end ">
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  );
};

export default Form;
