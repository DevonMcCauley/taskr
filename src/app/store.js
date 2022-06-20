import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// Redux store for the application
export default configureStore({
	reducer: {
		task: taskReducer,
	},
});
