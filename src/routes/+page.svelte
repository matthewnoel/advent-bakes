<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Advent Bakes</title>
	<meta name="description" content={`Advent baking calendar.`} />
</svelte:head>

<h1>Advent Bakes</h1>
<h2>2025</h2>

<table>
	<tbody>
		{#each Array(4) as _, rowIndex}
			<tr>
				{#each Array(6) as _, colIndex}
					<td
						style={12 === new Date().getMonth() + 1 &&
						rowIndex * 6 + colIndex + 1 === new Date().getDate()
							? 'border-color: red !important;'
							: ''}
					>
						<a href="{base}/2025/day/{rowIndex * 6 + colIndex + 1}">{rowIndex * 6 + colIndex + 1}</a
						>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	h1 {
		text-align: center;
		margin: auto 0 0 0;
	}
	h2 {
		text-align: center;
		font-size: 1rem;
		margin: 0 0 1rem 0;
	}
	table {
		margin: auto;
		border: 1px solid black;
		padding: 0.1rem;
	}
	td {
		border: 1px solid black;
		padding: 0.5rem;
		text-align: center;
	}
</style>
