export type Task = {
  id: string;
  title?: string;
  task?: string;
  description?: string;
  due_date?: string;
  is_complete?: "completed" | "not-completed";
  category?: string;
  from: string;
  to: string;
  created_at?: string;
  updated_at?: string;
};
export type TaskState = {
  id?: string;
  title?: string;
  task?: string;
  description?: string;
  due_date?: string;
  is_complete?: "completed" | "not-completed";
  category?: string;
  from?: string;
  to?: string;
  created_at?: string;
  updated_at?: string;
};

export type NewState = {
  errors?: {
    id?: string[];
    title?: string[];
    task?: string[];
    description?: string[];
    due_date?: string[];
    is_complete?: "completed" | "not-completed";
    category?: string[];
    from?: string[];
    to?: string[];
    created_at?: string[];
    updated_at?: string[];
  };
  message?: string | null;
};
