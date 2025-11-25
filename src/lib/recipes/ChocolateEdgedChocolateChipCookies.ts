import type { Recipe } from './types';

export const ChocolateEdgedChocolateChipCookies: Recipe = {
	title: 'Chocolate-Edged Chocolate Chip Cookies',
	ingredients: [
		{
			type: 'countable',
			value: 'egg',
			quantity: 1
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 25
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 15
		}
	],
	instructions: [
		'Lorem ipsum',
		'Dolor sit amet',
		'Consectetur adipiscing elit',
		'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		'Ut enim ad minim veniam'
	],
	estimatedCount: 32
};
