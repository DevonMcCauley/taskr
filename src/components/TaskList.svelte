<script>
	import { onDestroy, onMount } from 'svelte';
	import tasksStore from '../stores/tasks-store';
	import TaskItem from './TaskItem.svelte';

	let fetchedTasks = [];

	let unsubscribe;

	let showDescription = true;

	onMount(() => {
		tasksStore.fetchTasks();
		// Subscribe to the store & set fetchedTasks to the current value of the store
		unsubscribe = tasksStore.subscribe((tasks) => {
			fetchedTasks = tasks;
		});
	});

	onDestroy(() => {
		// Ensure that we unsubscribe from the store when the component is destroyed
		if (unsubscribe) unsubscribe();
	});

	const handleClearCompleted = () => {
		tasksStore.clearCompletedTasks();
	};
</script>

<!-- If there are no tasks, prompt the user to add some and don't render the description toggle -->
{#if fetchedTasks.length === 0}
	<div class="alert alert-info" role="alert">No tasks found. Add a task to get started.</div>
{:else}
	<!-- If there are tasks, render the toolbar-->
	<!-- TODO: find if there is a use-case for hiding the description -->
	<!-- The dropdown box for task settings
	<CollapseButton>
		<span slot="button-text">
			<GearLight />
		</span>
		<div class="d-flex align-items-center ms-auto">
			<div class="ms-auto d-flex my-2">
				<label for="ShowDescriptionToggle" class="form-check-label align-items-center me-2"
					>Show Description</label
				>
				<div class="form-check form-switch">
					<input
						class="form-check-input"
						name="ShowDescriptionToggle"
						type="checkbox"
						role="switch"
						style="transform: scale(1.2);"
						bind:checked={showDescription}
					/>
				</div>
			</div>
		</div>
	</CollapseButton> -->
	<!-- The clear completed button -->
	<button
		class="btn btn-danger"
		disabled={fetchedTasks.filter((task) => task.completed).length === 0}
		on:click={handleClearCompleted}
	>
		Clear Completed
	</button>
{/if}

<div class="row mt-2">
	<!-- Iterate through the tasks list and display them -->
	{#each fetchedTasks as task (task.id)}
		<TaskItem {task} {showDescription} />
	{/each}
</div>
