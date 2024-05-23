// import * as React from 'react';
import MainArea from './MainArea';
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

export default function SideBar({ addNewProject }) {

    return (
        <>
            <Drawer
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
                        <ListItemButton onClick={addNewProject}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add new project"></ListItemText>
                        </ListItemButton>
                        {/* map over some array, and render different listItems components */}
                    </ListItem>
                </List>
            </Drawer>
            {/* <MainArea /> */}
        </>
    );
}


