import Form from "@/components/edit-task/Form";
import { getTodoByID } from "@/lib/actions";

export default async function EditPage({
  params,
}: {
  params: { todoID: string };
}) {
  const data = await getTodoByID(params.todoID);
  const todos = JSON.parse(JSON.stringify(data));

  return (
    <>
      <Form todo={todos} />
    </>
  );
}
