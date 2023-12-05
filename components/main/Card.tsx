"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Task } from "@/scripts/definitions";
import { Switch } from "@/components/ui/switch";

export function CardWithData({ todo }: { todo: Task }) {
  console.log();

  return (
    <Card className="w-[350px] max-h-[350px] ">
      <CardHeader>
        <Badge className="w-fit text-indigo-500 " variant={"outline"}>
          {todo.category}
        </Badge>
        <CardTitle>{todo.title}</CardTitle>

        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex relative bottom-0 justify-between">
        <Switch onCheckedChange={(e) => console.log(e)} />
        {/* <Button></Button> */}
        <Button variant="outline">Edit</Button>
      </CardFooter>
    </Card>
  );
}
