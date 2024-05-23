import { Box, Typography, Button } from "@mui/material";

export const NoProjects = ({ addNewProject }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "200px auto",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          No Project Selected
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Select a project or create a new one
        </Typography>
        <Button variant="contained" onClick={addNewProject}>
          Create Project
        </Button>
      </Box>
    </>
  );
};
