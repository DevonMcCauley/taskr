import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Function to get tasks from localStorage or set an empty array if there's none
const getLocalStorageTasks = () => {
	if (!browser) return [];

	return JSON.parse(localStorage.getItem('tasks')) || [];
};

const tasks = writable(getLocalStorageTasks());

// Subscribe to changes and update localStorage whenever the tasks are updated
tasks.subscribe((currentTasks) => {
	if (!browser) return;
	localStorage.setItem('tasks', JSON.stringify(currentTasks));
});

const tasksStore = {
	subscribe: tasks.subscribe,
	fetchTasks: () => {
		tasks.set(getLocalStorageTasks());
	},
	addTask: (taskData) => {
		const newTask = {
			...taskData
		};
		tasks.update((items) => {
			return [newTask, ...items];
		});
	},
	removeTask: (id) => {
		tasks.update((items) => {
			return items.filter((item) => item.id !== id);
		});
	}
};

export default tasksStore;
