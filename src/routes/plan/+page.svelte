<script lang="ts">
	import { menu } from '$lib/2025';
</script>

<h1>Plan View</h1>
<table>
	<thead>
		<tr>
			<th>Date</th>
			<th>Day</th>
			<th>Recipe</th>
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(menu) as [date, recipe] (date)}
			<tr>
				<td>{date}</td>
				<td
					>{new Date(2025, 11, Number(date)).toLocaleDateString(undefined, { weekday: 'long' })}</td
				>
				<td>{recipe.title}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	h1 {
		text-align: center;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		border: 2px solid black;
	}
	th,
	td {
		border: 1px solid black;
		padding: 0 0.5rem;
	}
</style>
