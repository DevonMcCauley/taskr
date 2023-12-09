export const initialState = {
	tasks: [], // initially empty
};

export function tasksReducer(state, action) {
	switch (action.type) {
		case "ADD_TASK":
			// Allows us to add a new task to the tasks array
			return { ...state, tasks: [action.payload, ...state.tasks] };
		case "DELETE_TASK":
			// Allows us to delete a task from the tasks array
			return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
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
		default:
			return state;
	}
}
