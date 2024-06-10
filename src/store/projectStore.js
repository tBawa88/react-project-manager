import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    selectedProject: undefined,
    projectList: [],
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        onAddNewProject: (state) => {
            state.selectedProject = null;
        },
        onCancelProject: (state) => {
            state.selectedProject = undefined;
        },

        onSaveProject: (state, action) => {
            const newProject = action.payload;
            state.projectList.push(newProject);
            state.selectedProject = newProject;
        },

        onSelectProject: (state, action) => {
            const project = action.payload;
            state.selectedProject = project;
        },

        onDeselectProject: (state, action) => {
            state.selectedProject = undefined;
        },

        onDeleteProject: (state, action) => {
            const projectId = action.payload;
            state.projectList = state.projectList.filter(project => project.id !== projectId);
            state.selectedProject = undefined;
        }
    }
})

export const projectActions = projectSlice.actions;