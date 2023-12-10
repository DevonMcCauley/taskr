import { Task } from "@/types/task";

// Now use the Task type in your state and action definitions
interface TasksState {
	tasks: Task[];
}

type TasksAction =
	| { type: "ADD_TASK"; payload: Task }
	| { type: "TOGGLE_TASK"; payload: number } // Assuming payload is the task ID
	| { type: "CLEAR_COMPLETED" };

export const initialState: TasksState = {
	tasks: [], // initially empty
};

export function tasksReducer(state: TasksState, action: TasksAction): TasksState {
	switch (action.type) {
		case "ADD_TASK":
			return { ...state, tasks: [action.payload, ...state.tasks] };
		case "TOGGLE_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id === action.payload) {
						return { ...task, completed: !task.completed };
					}
					return task;
				}),
			};
		case "CLEAR_COMPLETED":
			return { ...state, tasks: state.tasks.filter((task) => !task.completed) };
		default:
			return state;
	}
}
