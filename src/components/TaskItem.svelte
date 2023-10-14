<script>
	import tasksStore from '../stores/tasks-store';
	export let task;

	const handleClick = () => {
		// If a task is clicked, remove it from the store
		// tasksStore.removeTask(task.id);
	};
</script>

<button class="list-group-item list-group-item-action" on:click={handleClick}>
	{task.title}
</button>
