<script>
	import { slide } from 'svelte/transition';
	let isCollapsed = true;
</script>

<button
	class="btn btn-primary"
	on:click={() => (isCollapsed = !isCollapsed)}
	aria-expanded={!isCollapsed}
>
	<slot name="button-text" />
</button>

{#if !isCollapsed}
	<div transition:slide>
		<div class="card card-body overflow-hidden mt-1 w-100">
			<slot />
		</div>
	</div>
{/if}
