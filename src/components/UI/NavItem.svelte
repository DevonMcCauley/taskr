<script>
	export let item;
	export let toggleNav;

	const { link, text, icon } = item;
</script>

<li class="nav-item">
	<span class="text-light d-flex align-items-center ms-lg-3">
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		<a class="ms-2 ms-lg-1 nav-link" on:click={() => toggleNav()} href={link}>{text}</a>
	</span>
</li>
