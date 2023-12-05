"use server";
import { z } from "zod";
import {
  addDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebase";
import { revalidatePath } from "next/cache";
import { redirect, permanentRedirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

const TodoSchema = z.object({
  id: z.string(),
  task: z.string({ required_error: "Please enter the task you want to do" }),
  description: z.string(),
  from: z.string().regex(regex),
  to: z.string().regex(regex),
  created_at: z.date(),
});

//
const CreateTodo = TodoSchema.omit({ id: true, created_at: true });
export async function createTodo(formData: FormData) {
  console.log("createTodo invoked...");
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
    const newDocRef = await addDoc(docRef, {
      task: task,
      description: description,
      from: from,
      to: to,
    });
    console.log(newDocRef.id);
  } catch (error) {
    console.log("database error: adding a todo task ");
  }

  revalidatePath("/");
  redirect("/");
}

// get all todos from firebase

export async function getTodos() {
  noStore();
  const docRef = collection(db, "todos");
  try {
    const dataSnapShot = await getDocs(docRef);
    const data = dataSnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.log("database error fetching data", error);
  }
}
