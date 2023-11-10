<script>
	import EnvelopeDuotone from '~icons/ph/envelope-duotone';
	import HouseDuotone from '~icons/ph/house-duotone';
	import ListDuotone from '~icons/ph/list-duotone';
	import NavItem from './NavItem.svelte';

	let isNavCollapsed = true;

	function toggleNav() {
		isNavCollapsed = !isNavCollapsed;
	}

	let navItems = [
		{
			text: 'Home',
			link: '/',
			icon: HouseDuotone
		},
		{
			text: 'Contact',
			link: '/contact',
			icon: EnvelopeDuotone
		}
	];
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-info">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Taskr</a>
		<button
			class="navbar-toggler border-2"
			type="button"
			on:click={toggleNav}
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<ListDuotone class="fs-1" />
		</button>
		<div class={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}>
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each navItems as item}
					<NavItem {item} {toggleNav} />
				{/each}
			</ul>
		</div>
	</div>
</nav>
