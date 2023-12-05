export type Task = {
  id: number | string;
  title?: string;
  task?: string;
  description?: string;
  due_date?: string;
  is_complete?: "completed" | "not-completed";
  category?: string;
  from: string;
  to: string;
};
