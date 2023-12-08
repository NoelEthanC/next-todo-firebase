"use client";

import { deleteTodo } from "@/lib/actions";

const DeleteButton = ({ id }: { id: string }) => {
  const handleDelete = async () => {
    console.log("clicked");
    if (window.confirm("Are you sure you want to Delete this task?")) {
      await deleteTodo(id);
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
