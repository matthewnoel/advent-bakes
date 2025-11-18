<script lang="ts">
	let { children } = $props();
	import { page } from '$app/state';
</script>

<main>
	{@render children()}
	<nav>
		{#if page.route.id !== '/'}
			<a href="/">Home</a>
		{/if}
		<a href="https://github.com/matthewnoel/advent-bakes">Source Code</a>
	</nav>
</main>

<style>
	main {
		margin: auto;
		max-width: 500px;
	}
	nav {
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	nav > a:only-child {
		margin: 0 auto;
	}
</style>
