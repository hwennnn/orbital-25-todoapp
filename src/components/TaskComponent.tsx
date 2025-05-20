import { Task } from "../types";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

interface TaskProps {
  task: Task;
  index: number;
  handleToggleTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

const label = { inputProps: { "aria-label": "Task checkbox" } };

function TaskComponent({
  task,
  index,
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
