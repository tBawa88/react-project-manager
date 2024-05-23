import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
const drawerWidth = 240;

export default function SideBar({ projectList, addNewProject, handleProjectClick, handleDrawerClick }) {

    return (
        <>
            <Drawer
                onClick={handleDrawerClick}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Your Projects
                    </Typography>
                </Toolbar>
                <List>
                    <ListItem>
                        <ListItemButton onClick={(e) => {
                            e.stopPropagation();
                            console.log('add project clicked')
                            addNewProject()
                        }}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add new project"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    {/* map over the received project list and render listitems */}
                    {
                        projectList.map((project, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log('project clicked')
                                            handleProjectClick(project)
                                        }}>
                                        <ListItemText>{project.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }

                </List>
            </Drawer>
            {/* <MainArea /> */}
        </>
    );
}


