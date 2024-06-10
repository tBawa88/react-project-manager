import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskStore";
import { projectSlice } from "./projectStore";

const store = configureStore({
    reducer: {
        project: projectSlice.reducer,
        task: taskSlice.reducer
    }
})

export default store;