// Actions for tasks
// TODO: This will eventually be server actions

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getTasks = async () => {
	const response = await fetch(`${apiURL}/tasks`, {
		credentials: "include",
	});
	const { tasks } = await response.json();

	return tasks;
};

export const createTask = async (taskName: string, taskDescription: string) => {
	// Make a call to the backend to create a task
	const response = await fetch(`${apiURL}/tasks`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: taskName,
			description: taskDescription,
		}),
	});
};

export const deleteTask = async (task: any) => {
	const response = await fetch(`${apiURL}/tasks/${task._id}`, {
		method: "DELETE",
		credentials: "include",
	});
	const data = await response.json();

	return data;
};
