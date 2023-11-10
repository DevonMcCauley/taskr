<script>
	import toast from 'svelte-french-toast';
	import PersonSimpleRunDuotone from '~icons/ph/person-simple-run-duotone';

	let name;
	let email;
	let message;

	const handleSubmit = (event) => {
		event.preventDefault();

		// Make sure all fields are filled out
		if (!name || !email || !message) {
			toast.error('Please fill out all fields');
			return;
		}

		// TODO: Add logic to send email

		// Clear the fields
		name = '';
		email = '';
		message = '';
	};
</script>

<form on:submit={handleSubmit} class="container">
	<div class="row d-flex w-100 mt-3 mx-0 justify-content-center">
		<div class="col-12 col-lg-5 col-xl-6">
			<input bind:value={name} type="text" class="form-control" placeholder="First Name" />
		</div>
	</div>

	<div class="row d-flex w-100 my-2 mx-0 justify-content-center">
		<div class="col-12 col-lg-5 col-xl-6">
			<input bind:value={email} type="email" class="form-control" placeholder="Email" />
		</div>
	</div>

	<div class="row d-flex w-100 my-2 mx-0 justify-content-center">
		<div class="col-12 col-lg-5 col-xl-6">
			<textarea
				class="form-control"
				placeholder="Leave your message here"
				cols="10"
				rows="6"
				bind:value={message}
			/>
		</div>
	</div>

	<div class="row d-flex w-100 mx-0 justify-content-center">
		<div class="col-12 col-lg-3 col-xl-2">
			<button
				class="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center"
				type="submit"
			>
				<PersonSimpleRunDuotone class="me-2" />
				Submit</button
			>
		</div>
	</div>
</form>
