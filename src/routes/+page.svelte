<script>
	import TaskForm from '../components/TaskForm.svelte';
	import TaskList from '../components/TaskList.svelte';
</script>

<svelte:head>
	<title>Taskr - Home</title>
</svelte:head>

<div class="container-fluid">
	<TaskForm />
	<TaskList />
</div>
