<script>
	import Footer from '../components/UI/Footer.svelte';
	import Header from '../components/UI/Header.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import './styles.css';
</script>

<div class="container-fluid">
	<div class="row">
		<Header />
	</div>

	<div class="row">
		<main>
			<slot />
		</main>
	</div>

	<div class="row">
		<Footer />
	</div>
</div>
