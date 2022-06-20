import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
		// Removes a task using its id
		removeTask: (state, action) => {
			const taskId = action.payload;

			state.taskList = state.taskList.filter(
				(task) => task.id !== taskId
			);
		},
	},
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
