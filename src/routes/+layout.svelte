<script lang="ts">
	let { children } = $props();
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { pwaInfo } from 'virtual:pwa-info';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({ immediate: true });
		}
	});
</script>

<svelte:head>
	{#if pwaInfo}
		<link
			rel="manifest"
			href={pwaInfo.webManifest.href}
			crossorigin={pwaInfo.webManifest.useCredentials ? 'use-credentials' : undefined}
		/>
	{/if}
</svelte:head>

<main>
	{@render children()}
	<nav>
		{#if page.route.id !== '/'}
			<a href={resolve('/')}>Home</a>
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
