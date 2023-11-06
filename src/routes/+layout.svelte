<script>
	import Footer from '../components/UI/Footer.svelte';
	import Header from '../components/UI/Header.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	import 'bootstrap/dist/css/bootstrap.min.css';
	import './styles.css';
</script>

<Header />

<div class="container-fluid">
	<main>
		<slot />
	</main>
	<Toaster />
</div>

<Footer />
