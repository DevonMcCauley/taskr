<script>
	import { onMount } from 'svelte';
	import tasksStore from '../stores/tasks-store';

	let title;
	let inputElement;

	const handleSubmit = () => {
		// Check that the task title is not empty
		if (!title && title !== '') {
			// TODO: Add better error handling & alerts
			alert('Please enter a task title.');
			return;
		}

		tasksStore.addTask({
			id: Math.random().toString(),
			title: title
		});

		// Clear the input field & select it again
		title = '';
		setTimeout(() => {
			inputElement.focus();
		}, 0);
	};

	onMount(() => {
		// Select the input element when the component is mounted
		inputElement.select();
	});
</script>

<form on:submit={handleSubmit}>
	<div class=" row d-flex w-100 my-3 justify-content-center g-3">
		<div class="col-12 col-lg-9">
			<input
				bind:value={title}
				type="text"
				class="form-control"
				placeholder="Add a Task"
				aria-label="Add a Task"
				aria-describedby="addTaskBtn"
				bind:this={inputElement}
			/>
		</div>
		<div class="col-12 col-lg-3">
			<button class="btn btn-outline-primary w-100" type="submit" id="addTaskBtn">Add</button>
		</div>
	</div>
</form>
