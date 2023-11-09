<script>
	import toast from 'svelte-french-toast';
	import PlusCircleDuotone from '~icons/ph/plus-circle-duotone';
	import EraseDuotone from '~icons/ph/eraser-duotone';
	import tasksStore from '../stores/tasks-store';

	let title;
	let description;
	let taskNameInput;

	const handleSubmit = (event) => {
		event.preventDefault();
		// Check that the task title is not empty
		if (!title || title === '') {
			toast.error('Please enter a task title');
			return;
		}

		// If there is no description set it to an empty string
		if (!description) description = '';

		tasksStore.addTask({
			id: Math.random().toString(),
			title,
			description
		});

		// Clear the input field & select it again
		title = '';
		description = '';
		taskNameInput.focus();
	};

	const handleClear = () => {
		title = '';
		description = '';
		taskNameInput.focus();
	};
</script>

<form on:submit={handleSubmit}>
	<div class="row d-flex w-100 my-3 justify-content-center g-3">
		<div class="col-12 col-lg-5 col-xl-4">
			<input
				bind:value={title}
				type="text"
				class="form-control"
				placeholder="Task Name"
				aria-label="Task Name"
				bind:this={taskNameInput}
			/>
			<input
				bind:value={description}
				type="text"
				class="form-control my-2"
				placeholder="Task Description"
				aria-label="Task Description"
			/>
		</div>
		<div class="col-12 col-lg-3 col-xl-2">
			<button
				class="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center"
				type="submit"
			>
				<PlusCircleDuotone class="me-1" />
				Add</button
			>
			<button class="btn btn-outline-warning w-100 my-2" type="button" on:click={handleClear}>
				<EraseDuotone class="me-1" />
				Clear</button
			>
		</div>
	</div>
</form>
<hr />
