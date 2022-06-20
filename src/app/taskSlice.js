import { createSlice } from "@reduxjs/toolkit";

// Redux Slice related to task activities
export const taskSlice = createSlice({
	name: "task",
	initialState: {
		taskList: [],
	},
	reducers: {
		// Adds a task to the task list which is rendered on the landing page
		addTask: (state, action) => {
			state.taskList.push(action.payload);
		},
	},
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
