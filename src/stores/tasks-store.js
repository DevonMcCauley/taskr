import { writable } from 'svelte/store';

const tasks = writable([
	{ id: 1, title: 'Do Laundry' },
	{ id: 2, title: 'Do Dishes' },
	{ id: 3, title: 'Do Chores' },
	{ id: 4, title: 'Do Other Stuff' }
]);

const tasksStore = {
	subscribe: tasks.subscribe,
	setTasks: (tasksArray) => {
		tasks.set(tasksArray);
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
