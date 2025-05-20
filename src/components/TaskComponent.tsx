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
      <td style={{ textAlign: "center" }}>{task.id}</td>
      <td style={{ textAlign: "center" }}>{task.title}</td>
      <td style={{ textAlign: "center" }}>
        <Checkbox
          {...label}
          checked={task.done}
          onChange={() => handleToggleTask(task)}
        />
      </td>
      <td style={{ textAlign: "center" }}>
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
