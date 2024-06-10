import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        onAddTask: (state, action) => {
            const newTask = action.payload;
            state.taskList.push(newTask);
        },
        onDeleteTask: (state, action) => {
            const taskId = action.payload;
            state.taskList = state.taskList.filter(task => task.id !== taskId);
        }
    }
})

export const taskActions = taskSlice.actions;