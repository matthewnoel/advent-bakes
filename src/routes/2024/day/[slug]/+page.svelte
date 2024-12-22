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

<div>Day {data.day}</div>
<h1>{data.title}</h1>
{#each data.ingredients as ingredient}
	<p>{formatIngredient(ingredient)}</p>
{/each}
{#each data.instructions as instruction}
	<p>{instruction}</p>
{/each}

<p>Estimated cookie count: {data.estimatedCount}</p>
