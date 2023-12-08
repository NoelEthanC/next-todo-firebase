import React from "react";
import { Badge } from "../ui/badge";
import { Task } from "@/scripts/definitions";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import TodoActionPopup from "./TodoActionPopup";

const TodoItem = ({ todo }: { todo: Task }) => {
  return (
    <div className="bg-gray-950 text-gray-200 flex w-full rounded-md space-y-4 flex-col p-4 ">
      <Badge className="w-fit font-light tracking-widest text-white uppercase text-xs ">
        tech
      </Badge>
      <div className=" flex justify-between items-center ">
        <h4 className=" font-semibold tracking-wide leading-3 ">{todo.task}</h4>
        <TodoActionPopup todoID={todo.id} />
      </div>
      <div className="flex justify-between items-center ">
        <p>
          {todo.from} - {todo.to}
        </p>
        <Checkbox className="rounded-md  border-gray-600 bg-gray-300 checked:bg-blue-500  " />
      </div>
    </div>
  );
};

export default TodoItem;
