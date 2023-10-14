<script>
	import tasksStore from '../stores/tasks-store';

	let title;

	const handleSubmit = () => {
		const taskData = {
			id: title,
			title: title
		};
		tasksStore.addTask(taskData);
	};
</script>

<form on:submit={handleSubmit}>
	<div class=" row d-flex w-100 my-3 justify-content-center">
		<div class="col-5">
			<input
				bind:value={title}
				type="text"
				class="form-control"
				placeholder="Add a Task"
				aria-label="Add a Task"
				aria-describedby="addTaskBtn"
			/>
		</div>
		<div class="col-2">
			<button class="btn btn-outline-primary w-100" type="submit" id="addTaskBtn">Add</button>
		</div>
	</div>
</form>
