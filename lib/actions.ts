"use server";
import { z } from "zod";
import {
  addDoc,
  doc,
  getDocs,
  getDoc,
  collection,
  Timestamp,
  orderBy,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Task, TaskState, NewState } from "@/scripts/definitions";

let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

const TodoSchema = z.object({
  id: z.string(),
  task: z.string({ required_error: "Please enter the task you want to do" }),
  description: z.string(),
  from: z.string().regex(regex),
  to: z.string().regex(regex),
  created_at: z.date(),
});

//action to create and store a todo task
const CreateTodo = TodoSchema.omit({ id: true, created_at: true });
export async function createTodo(formData: FormData) {
  const validatedFields = CreateTodo.safeParse({
    task: formData.get("task"),
    description: formData.get("description"),
    from: formData.get("from"),
    to: formData.get("to"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const { task, description, from, to } = validatedFields.data;

  // store the data
  const docRef = collection(db, "todos");
  try {
    await addDoc(docRef, {
      task: task,
      description: description,
      from: from,
      to: to,
      created_at: Timestamp.now(),
    });
  } catch (error) {
    console.log(" database error: adding a todo task |", error);
  }

  revalidatePath("/");
  redirect("/");
}

// get all todos from firebase
export async function getTodos() {
  noStore();
  // const session = await getServerSession(authOptions);
  // if (session) {
  // const currentUserID = session?.user.id;
  const docRef = collection(db, "todos");
  try {
    const getTodosQuery = query(
      docRef,
      orderBy("created_at", "desc")
      // where("uid", "==", currentUserID)
    );

    const dataSnapShot = await getDocs(getTodosQuery);
    const data = dataSnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.log("database error fetching data", error);
  }
  // } else {
  // return null;
  // console.log("user not logged in");
  // }
}

// get a single Todo task by ID
export async function getTodoByID(todoID: string) {
  const docRef = doc(db, "todos", todoID);
  try {
    const todoSnapShot = await getDoc(docRef);
    const todo = { id: todoSnapShot.id, ...todoSnapShot.data() };
    return todo;
  } catch (error) {
    console.log("Error fetching todo", error);
  }
}

// update a single Todo task
const UpdateTodo = TodoSchema.omit({ id: true, created_at: true });
export async function updateTodo(
  todoID: string,
  prevState: TaskState,
  formData: FormData
) {
  const validatedFields = UpdateTodo.safeParse({
    task: formData.get("task"),
    description: formData.get("description"),
    from: formData.get("from"),
    to: formData.get("to"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Task.",
    };
  }
  const { task, description, from, to } = validatedFields.data;

  // store the data
  const docRef = doc(db, "todos", todoID);
  try {
    await updateDoc(docRef, {
      task: task,
      description: description,
      from: from,
      to: to,
      updated_at: Timestamp.now(),
    });
  } catch (error) {
    console.log(" database error: adding a todo task |", error);
  }

  revalidatePath("/");
  redirect("/");
}

// delete a todo task

export async function deleteTodo(id: string) {
  const docRef = doc(db, "todos", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.log("Error deleting task in database,", error);
  }
  revalidatePath("/");
  redirect("/");
}
