import React, { createContext, useReducer, useContext, useEffect } from "react";
import { initialState, tasksReducer } from "../reducers/tasksReducer";
import { Task } from "@/types/task";


type TasksAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "CLEAR_COMPLETED" };


interface TasksContextType {
	state: { tasks: Task[] };
	dispatch: React.Dispatch<TasksAction>;
}

const defaultContextValue: TasksContextType = {
	state: initialState,
	dispatch: () => null,
};

type TasksProviderProps = {
	children: React.ReactNode;
};

export const TasksContext = createContext<TasksContextType>(defaultContextValue);

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedTasksString = localStorage.getItem("tasks");
			if (savedTasksString) {
				const savedTasks = JSON.parse(savedTasksString) as Task[]; // assuming savedTasks is of type Task[]
				savedTasks.forEach((task) => {
					dispatch({ type: "ADD_TASK", payload: task });
				});
			}
		}
	}, []);


	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(state.tasks));
	}, [state.tasks]);

	return <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>;
};
