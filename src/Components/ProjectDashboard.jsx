import { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import ProjectContent from "./ProjectContent";
import AddProject from "./AddProject";
import NoProjects from "./NoProjects";
function ProjectDashboard() {
    const [projectList, setProjectList] = useState([]);
    const [addProjectSelected, setAddProjectSelected] = useState(false);
    const [clickedProject, setClickedProject] = useState({});
    const [projectTaskList, setProjectTaskList] = useState({});
    const projectIsClicked = Object.keys(clickedProject).length !== 0;

    const renderNewProjectPage = () => {
        const temp = {};
        setClickedProject(temp);
        setAddProjectSelected(true);
    }
    const handleCancelProject = () => {
        setAddProjectSelected(false);
    }

    //added new project into the array 
    const handleSaveProject = (project) => {
        console.log("Inside project list component", project)
        setProjectList(oldList => [...oldList, project]);
        setClickedProject(project);
        setAddProjectSelected(false);
    }

    //when project is clicked
    const handleProjectClick = (project) => {
        setClickedProject(project);
    }

    //when drawer is clicked, no project should be selected
    const handleDrawerClick = () => {
        const temp = {};
        setClickedProject(temp);
        setAddProjectSelected(false);
    }

    const handleAddTask = (title, taskContent) => {
        setProjectTaskList(oldList => {
            return {
                ...oldList,
                [title]: [...(oldList[title] || []), taskContent]
                //if oldList[title] is falsy, meaning the property doesnt exist, or it's an empty array
                //initialize it with an empty array, and add taskContent into it
            }
        })
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>

                <SideBar
                    projectList={projectList}
                    addNewProject={renderNewProjectPage}
                    handleProjectClick={handleProjectClick}
                    handleDrawerClick={handleDrawerClick}
                />

                {/* conditionally render NoProject component */}
                {(!addProjectSelected && !projectIsClicked) && <NoProjects
                    addNewProject={renderNewProjectPage}
                />}

                {/* conditionally render AddProject comp */}
                {(addProjectSelected && !projectIsClicked) && <AddProject
                    saveProject={handleSaveProject}
                    cancelProject={handleCancelProject} />}

                {/* conditionally render projectContent component */}
                {(projectIsClicked && !addProjectSelected) && <ProjectContent
                    project={clickedProject}
                    addNewTask={handleAddTask}
                    projectTaskList={projectTaskList}
                />}
            </Box>
        </>
    )

}


export default ProjectDashboard;