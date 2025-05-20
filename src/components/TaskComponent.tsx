import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Task } from "../types";

interface TaskProps {
  task: Task;
  handleToggleTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

const label = { inputProps: { "aria-label": "Task checkbox" } };

function TaskComponent({
  task,
  handleToggleTask,
  handleDeleteTask,
}: TaskProps) {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>
        <Checkbox
          {...label}
          checked={task.done}
          onChange={() => handleToggleTask(task)}
        />
      </td>
      <td>
        <Button
          size="small"
          onClick={() => handleDeleteTask(task)}
          variant="contained"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TaskComponent;
