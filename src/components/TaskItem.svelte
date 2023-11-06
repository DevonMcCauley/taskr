<script>
	import tasksStore from '../stores/tasks-store';
	export let task;
	export let showDescription;

	const handleClick = () => {
		// If a task is clicked, remove it from the store
		tasksStore.removeTask(task.id);
	};
</script>

<div class="card mb-2" on:click={handleClick}>
	<div class="card-body">
		<h5 class="card-title">{task.title}</h5>
		{#if showDescription}
			<p class="card-text">{task.description}</p>
		{/if}
	</div>
</div>
