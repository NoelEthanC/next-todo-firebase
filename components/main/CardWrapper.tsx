import React from "react";
import { fakeTodos } from "@/scripts/todos";
import { CardWithData } from "./Card";
import TodoItem from "./TodoItem";
import { getTodos } from "@/lib/actions";
import { Task } from "@/scripts/definitions";

const CardWrapper = async () => {
  const todos = await getTodos();
  // console.log(todos);
  return (
    <main className="flex flex-wrap gap-6 ">
      {todos?.map((todo: Task) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </main>
  );
};

export default CardWrapper;
