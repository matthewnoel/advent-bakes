<script lang="ts">
	import type { PageData } from './$types';
	import type { Ingredient } from '$lib/recipes';

	let { data }: { data: PageData } = $props();

	function formatIngredient(ingredient: Ingredient): string {
		switch (ingredient.type) {
			case 'countable':
				return `${ingredient.quantity} ${ingredient.value}`;
			case 'mass':
				return `${ingredient.grams} grams of ${ingredient.value}`;
			case 'volume':
				return `${ingredient.milliliters} milliliters of ${ingredient.value}`;
			default:
				return 'Unknown ingredient type';
		}
	}
</script>

<svelte:head>
	<title>Day {data.day}</title>
	<meta name="description" content={`Recipe for day "${data.day}" of advent baking.`} />
</svelte:head>

<main>
	<h1>{data.title}</h1>
	<h2>Day {data.day}</h2>

	<p>Estimated cookie count: {data.estimatedCount}</p>

	<div>
		<h3>Ingredients</h3>
		<ul>
			{#each data.ingredients as ingredient (ingredient.value)}
				<li>{formatIngredient(ingredient)}</li>
			{/each}
		</ul>
	</div>

	<br />

	<div>
		<h3>Instructions</h3>
		<ol>
			{#each data.instructions as instruction (instruction)}
				<li>{instruction}</li>
			{/each}
		</ol>
	</div>
</main>

<style>
	h1,
	h2,
	h3 {
		text-align: center;
	}

	div {
		border: 1px solid black;
	}

	main {
		margin: auto;
		max-width: 500px;
		display: flex;
		flex-direction: column;
	}
</style>
