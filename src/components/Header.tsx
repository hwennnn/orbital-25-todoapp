import { Button } from "@mui/material";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../App";
import { Task } from "../types";
import Box from "./Box";
import CatFact from "./CatFact";

interface HeaderProps {
  tasks: Task[];
  user: Session["user"];
}

function Header({ tasks, user }: HeaderProps) {
  const incompleteTaskCount: number = tasks.filter((task) => !task.done).length;

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error !== null) {
      console.error(error.message);
    }
  };

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Orbitals ToDoList</h3>

        <Button
          style={{
            minHeight: "50%",
          }}
          onClick={handleLogout}
          variant="contained"
          size="small"
        >
          Logout
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
        }}
      >
        <div className="HeaderBox">
          <Box>
            <h2>Overview</h2>
            <p>
              Welcome back, <strong>{user.email}</strong>
            </p>

            <p>
              {incompleteTaskCount > 0 ? (
                <>
                  You have <strong>{incompleteTaskCount}</strong> tasks that are
                  not done!
                </>
              ) : (
                "You have completed all the tasks!"
              )}
            </p>
          </Box>
        </div>
        <CatFact />
      </div>
    </header>
  );
}

export default Header;
