import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "./Box";

interface TaskInputProps {
  handleAddNewTask: (task: string) => void;
}

function TaskInput({ handleAddNewTask }: TaskInputProps) {
  const [task, setTask] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.length === 0) return;

    handleAddNewTask(task);
    setTask("");
  };

  return (
    <Box>
      <h2>Add Task</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-required"
          label="Task:"
          value={task}
          style={{ margin: "0 1rem" }}
          type="text"
          onChange={onInputChange}
          variant="standard"
        />

        <Button type="submit" variant="contained" size="small">
          Add
        </Button>
      </form>
    </Box>
  );
}

export default TaskInput;
