export const initialState = {
	tasks: [], // initially empty
};

export function tasksReducer(state, action) {
	switch (action.type) {
		case "ADD_TASK":
			return { ...state, tasks: [action.payload, ...state.tasks] };
		case "DELETE_TASK":
			console.log(action.payload);
			return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };

		default:
			return state;
	}
}
