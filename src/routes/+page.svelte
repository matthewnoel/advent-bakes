<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Advent Bakes</title>
	<meta name="description" content={`Advent baking calendar.`} />
</svelte:head>

<h1>Advent Bakes</h1>

<table>
	<tbody>
		{#each Array(4) as _, rowIndex}
			<tr>
				{#each Array(6) as _, colIndex}
					<td
						style={12 === new Date().getMonth() + 1 &&
						rowIndex * 6 + colIndex + 1 === new Date().getDate()
							? 'border: 1px solid red;'
							: ''}
					>
						<a href="{base}/2024/day/{rowIndex * 6 + colIndex + 1}">{rowIndex * 6 + colIndex + 1}</a
						>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
