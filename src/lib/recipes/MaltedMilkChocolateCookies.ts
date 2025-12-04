import { Sources, type Recipe } from './types';

export const MaltedMilkChocolateCookies: Recipe = {
	title: 'Malted Milk Chocolate Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'unsalted room temperature butter',
			grams: 220
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 100
		},
		{
			type: 'countable',
			value: 'egg',
			quantity: 1
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 7
		},
		{
			type: 'mass',
			value: 'plain malted milk powder',
			grams: 105
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 3
		},
		{
			type: 'mass',
			value: 'all-purpose flour',
			grams: 280
		},
		{
			type: 'mass',
			value: 'milk chocolate chips',
			grams: 230
		},
		{
			type: 'volume',
			value: 'grape seed oil (flavorless vegetable oil)',
			milliliters: 5
		}
	],
	instructions: [],
	estimatedCount: 48,
	source: {
		value: Sources.CookieAdventBook
	},
	isComplete: true
};
