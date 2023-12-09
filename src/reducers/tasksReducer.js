export const initialState = {
	tasks: [], // initially empty
};

export function tasksReducer(state, action) {
	switch (action.type) {
		case "ADD_TASK":
			// Allows us to add a new task to the tasks array
			return { ...state, tasks: [action.payload, ...state.tasks] };
		case "TOGGLE_TASK":
			// Allows us to toggle the completed property of a task
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
			// Allows us to clear all completed tasks from the tasks array
			return { ...state, tasks: state.tasks.filter((task) => !task.completed) };
		default:
			return state;
	}
}
