<script>
	import { onDestroy, onMount } from 'svelte';
	import tasksStore from '../stores/tasks-store';
	import TaskItem from './TaskItem.svelte';

	let fetchedTasks = [];

	let unsubscribe;

	$: console.log(fetchedTasks);

	onMount(() => {
		// Subscribe to the store & set fetchedTasks to the current value of the store
		unsubscribe = tasksStore.subscribe((tasks) => {
			fetchedTasks = tasks;
		});
	});

	onDestroy(() => {
		// Ensure that we unsubscribe from the store when the component is destroyed
		if (unsubscribe) unsubscribe();
	});
</script>

<ul>
	<!-- Iterate through the tasks list and display them -->
	{#each fetchedTasks as task (task.id)}
		<TaskItem title={task.title} />
	{/each}
</ul>
