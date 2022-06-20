import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

// Redux store for the application
export default configureStore({
	reducer: { task: taskSlice.reducer },
});
