<script lang="ts">
	import { base } from '$app/paths';
	import { getCurrentDate, isToday, isAfterToday } from '$lib/utils';
	// const mock = new Date(2025, 11, 25);
	// const date = getCurrentDate(mock);
	const date = getCurrentDate();

	const getTdStyles = (currentDate: Date, year: number, row: number, col: number) => {
		const styles: string[] = [];

		if (isToday(currentDate, year, row, col)) {
			styles.push('border-color: red !important;');
		}

		if (isAfterToday(currentDate, year, row, col)) {
			styles.push('background-color: grey !important;');
		}

		return styles.join(' ');
	};
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
					<td style={getTdStyles(date, 2025, rowIndex, colIndex)}>
						<a href="{base}/2025/day/{rowIndex * 6 + colIndex + 1}">{rowIndex * 6 + colIndex + 1}</a
						>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

{#if date.getMonth() === 11 && date.getDate() === 25}
	<div id="xmas-message">
		<h3>Merry Christmas!</h3>
		<p>Don't bake anything today</p>
	</div>
{/if}

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
	#xmas-message {
		text-align: center;
	}
</style>
