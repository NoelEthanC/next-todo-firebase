import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const TodoActionPopup = ({ todoID }: { todoID: string }) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="hover:bg-gray-600" variant="ghost">
            <MoreHorizontal className="cursor-pointer " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gray-700 text-white ">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" cursor-pointer ">
            Mark As Complete
          </DropdownMenuItem>
          <Link href={`/edit/${todoID}`}>
            <DropdownMenuItem className=" cursor-pointer ">
              Edit
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className=" cursor-pointer ">
            <DeleteButton id={todoID} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoActionPopup;
