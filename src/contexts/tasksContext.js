import { createContext, useReducer, useContext, useEffect } from "react";
import { initialState, tasksReducer } from "../reducers/tasksReducer";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	useEffect(() => {
		// Load tasks from localStorage only on client-side
		if (typeof window !== "undefined") {
			const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
			savedTasks.forEach((task) => {
				dispatch({ type: "ADD_TASK", payload: task });
			});
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(state.tasks));
	}, [state.tasks]);

	return <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>;
};
