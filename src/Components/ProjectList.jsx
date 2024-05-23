import { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import ProjectContent from "./ProjectContent";
import MainArea from "./MainArea";
import AddProject from "./AddProject";
import NoProjects from "./NoProjects";
function ProjectList() {
    const [projectList, setProjectList] = useState([]);
    const [projectSelected, setProjectSelected] = useState(false);

    const renderNewProjectPage = () => {
        setProjectSelected(true);
    }
    const handleCancelProject = () => {
        setProjectSelected(false);
    }
    const handleSaveProject = (project) => {
        console.log("Inside project list component", project)
        setProjectList(oldList => [...oldList, project])
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideBar
                    projectList={projectList}
                    addNewProject={renderNewProjectPage} />

                {/* conditionally render NoProject component */}
                {(!projectList.length && !projectSelected) && <NoProjects
                    addNewProject={renderNewProjectPage}
                />}

                {/* conditionally render AddProject comp */}
                {projectSelected && <AddProject
                    saveProject={handleSaveProject}
                    cancelProject={handleCancelProject} />}
            </Box>
        </>
    )

}


export default ProjectList;