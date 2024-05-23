import { Box, TextField, Typography, Button, List } from "@mui/material";

import { useState } from "react";

export const ProjectTodoList = ({ title, addNewTask }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // const addTask = () => {
  //     addNewTask()
  // }

  return (
    <>
      <Box>
        <Typography variant="h5">Tasks</Typography>

        <TextField
          id="standard-basic"
          label="Project Title"
          variant="standard"
          value={inputValue}
          onChange={handleChange}
        />

        <Button
          variant="text"
          sx={{ marginTop: "15px" }}
          onClick={() => {
            if (inputValue.trim()) {
              addNewTask(title, inputValue);
              setInputValue("");
            }
          }}
        >
          Add task
        </Button>

        {/* map over all the tasks and render them here */}
      </Box>
    </>
  );
};
