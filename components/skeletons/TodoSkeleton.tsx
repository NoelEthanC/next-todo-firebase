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
// <>
//   {Array(4).map(() => (
//     <TodoItemSkeleton />
//   ))}
// </>

const TodoSkeleton = () => {
  return (
    <main className="space-y-4">
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
    </main>
  );
};

export default TodoSkeleton;

export const LoadingSpinner = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="25"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </rect>
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="85"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </rect>
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="145"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </rect>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="25"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </rect>
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="85"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </rect>
        <rect
          fill="#FFFFFF"
          stroke="#FFFFFF"
          stroke-width="15"
          width="30"
          height="30"
          x="145"
          y="85"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </rect>
      </svg>
    </>
  );
};
