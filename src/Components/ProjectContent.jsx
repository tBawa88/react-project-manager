import { Box, Typography, List } from "@mui/material"
import ProjectTodoList from "./ProjectTodoList";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function ProjectContent({ project, addNewTask, projectTaskList }) {


    const taskList = (projectTaskList[project.title] || []).map((task, index) => {
        return <ListItem key={index}>
            <ListItemText>{task}</ListItemText>
            <ListItemButton>
                <ListItemText onClick={() => console.log('clear the task')}>Clear</ListItemText>
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
                <Typography variant="h3" component="div">
                    {project.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {project.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {project.dueDate}
                </Typography>
                <ProjectTodoList title={project.title} addNewTask={addNewTask} />
                <List>
                    {taskList}
                </List>
            </Box>


        </>
    )

}