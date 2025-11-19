<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		getCurrentDate,
		isToday,
		isAfterToday,
		rowColToDay,
		isCurrentlyChristmasForYear
	} from '$lib/utils';
	const year = 2025;
	const date = getCurrentDate(/* new Date(2025, 11, 20) */);

	const getTdStyles = (currentDate: Date, year: number, row: number, col: number) => {
		const styles: string[] = [];

		if (isToday(currentDate, year, row, col)) {
			styles.push('border-color: red !important;');
		}

		if (isAfterToday(currentDate, year, row, col)) {
			styles.push('background-color: lightblue !important;');
		}

		return styles.join(' ');
	};
</script>

<svelte:head>
	<title>Advent Bakes</title>
	<meta name="description" content="Advent baking calendar." />
</svelte:head>

<h1>Advent Bakes</h1>
<h2>{year}</h2>

<table>
	<tbody>
		{#each Array(4) as _, rowIndex (`r${rowIndex}`)}
			<tr>
				{#each Array(6) as _, colIndex (`c${colIndex}`)}
					<td style={getTdStyles(date, year, rowIndex, colIndex)}>
						<a href={resolve(`/${year}/day/${rowColToDay(rowIndex, colIndex)}`)}
							>{rowColToDay(rowIndex, colIndex)}</a
						>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

{#if isCurrentlyChristmasForYear(date, year)}
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
