import { Box, Typography, List, Button } from "@mui/material"
import ProjectTodoList from "./ProjectTodoList";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function ProjectContent({ project, addNewTask, deleteTask, projectTaskList, deleteProject }) {


    const taskList = (projectTaskList[project.title] || []).map((task, index) => {
        return <ListItem key={index}>
            <ListItemText>{task}</ListItemText>
            <ListItemButton>
                <ListItemText onClick={() => {
                    deleteTask(project.title, index);
                }}>Clear</ListItemText>
            </ListItemButton>
        </ListItem>
    })


    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                margin: '0 auto'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h3" component="div">
                        {project.title}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => { deleteProject(project) }}
                    >Delete Project</Button>
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                    {project.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {project.dueDate}
                </Typography>
                {/* Todo list component, that is being rendered for every project */}
                <ProjectTodoList title={project.title} addNewTask={addNewTask} />

                <List>
                    {taskList}
                </List>
            </Box>


        </>
    )

}