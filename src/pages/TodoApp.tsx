import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../App";
import Header from "../components/Header";
import TaskManager from "../components/TaskManager";
import { Task } from "../types";

interface TodoAppProps {
  user: Session["user"];
}

function TodoApp({ user }: TodoAppProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    let { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", {
        ascending: true,
      })
      .eq("user_id", user.id);
    if (data !== null) {
      setTasks(data as Task[]);
    }
    if (error !== null) {
      console.error("Error fetching tasks: ", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addNewTask = async (title: string) => {
    const { error } = await supabase
      .from("tasks")
      .insert([{ title: title, done: false, user_id: user.id }])
      .select();
    if (error !== null) {
      console.error("Error adding new task: ", error.message);
    }
    fetchTasks();
  };

  const handleToggleTask = async (task: Task) => {
    const { error } = await supabase
      .from("tasks")
      .update({ done: !task.done })
      .eq("id", task.id)
      .select();
    if (error !== null) {
      console.error("Error updating task: ", error.message);
    }
    fetchTasks();
  };

  const handleDeleteTask = async (task: Task) => {
    const { error } = await supabase.from("tasks").delete().eq("id", task.id);
    if (error !== null) {
      if (error !== null) {
        console.error("Error delete task: ", error.message);
      }
    }
    fetchTasks();
  };

  return (
    <div className="App">
      <Header user={user} tasks={tasks} />

      <main>
        <TaskManager
          tasks={tasks}
          handleAddNewTask={addNewTask}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default TodoApp;
