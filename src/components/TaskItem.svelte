<script>
	import tasksStore from '../stores/tasks-store';
	export let task;
	export let showDescription;

	const handleClick = () => {
		// If a task is clicked, toggle its completed status
		tasksStore.toggleTaskCompleted(task.id);
	};

	let completedStyle = 'text-decoration: line-through; color: #ccc';
</script>

<div class="card mb-2" on:click={handleClick}>
	<div class="card-body">
		<!-- If the task is completed, add the completedStyle class -->

		<h5 class="card-title" style={task.completed ? completedStyle : ''}>
			{task.title}
		</h5>

		{#if showDescription}
			<p class="card-text" style={task.completed ? completedStyle : ''}>{task.description}</p>
		{/if}
	</div>
</div>
