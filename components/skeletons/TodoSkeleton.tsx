import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TodoItemSkeleton = () => {
  return (
    <div className="bg-gray-950 text-gray-200 flex w-full rounded-md space-y-4 flex-col p-4">
      <div className="w-fit">
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="h-6 w-6">
          {/* You can use a Skeleton for icons or leave it empty */}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="h-5 w-5">
          {/* You can use a Skeleton for the checkbox or leave it empty */}
        </div>
      </div>
    </div>
  );
};

const TodoSkeleton = () => {
  return (
    <>
      {Array(4).map(() => (
        <TodoItemSkeleton />
      ))}
    </>
  );
};

export default TodoSkeleton;
