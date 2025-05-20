import { Paper } from "@mui/material";

interface BoxProps {
  children: string | JSX.Element | JSX.Element[];
}

function Box(props: BoxProps) {
  const { children } = props;

  return (
    <Paper
      style={{
        margin: "1rem",
        padding: "1rem",
        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.2)",
      }}
      elevation={3}
    >
      {children}
    </Paper>
  );
}

export default Box;
