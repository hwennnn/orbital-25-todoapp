import { Task } from "../types";
import Box from "./Box";
import TaskComponent from "./TaskComponent";
import TaskInput from "./TaskInput";

interface TaskManagerProps {
  tasks: Task[];
  handleAddNewTask: (task: string) => void;
  handleToggleTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

function TaskManager({
  tasks,
  handleAddNewTask,
  handleToggleTask,
  handleDeleteTask,
}: TaskManagerProps) {
  return (
    <>
      <TaskInput handleAddNewTask={handleAddNewTask} />
      {tasks.length > 0 && (
        <Box>
          <h2>Task List</h2>
          <table style={{ margin: "0 auto", width: "100%" }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Done</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                return (
                  <TaskComponent
                    key={index}
                    task={task}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                );
              })}
            </tbody>
          </table>
        </Box>
      )}
    </>
  );
}

export default TaskManager;
