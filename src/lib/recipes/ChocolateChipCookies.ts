import type { Recipe } from './types';
import { RecipeSource } from './types';

export const ChocolateChipCookies: Recipe = {
	title: 'Chocolate Chip Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 360
		},
		{
			type: 'mass',
			value: 'baking soda',
			grams: 5
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 5
		},
		{
			type: 'mass',
			value: 'softened butter',
			grams: 228
		},
		{
			type: 'mass',
			value: 'semi-sweet chocolate chips',
			grams: 340
		},
		{
			type: 'mass',
			value: 'granulated sugar',
			grams: 170
		},
		{
			type: 'mass',
			value: 'light brown sugar',
			grams: 160
		},
		{
			type: 'countable',
			value: 'eggs',
			quantity: 2
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 5
		}
	],
	instructions: [
		'Preheat oven to 375F',
		'Combine flour, baking soda, and salt in a bowl',
		'Beat butter, granulated sugar, brown sugar, and vanilla extract in a mixer until creamy',
		'Add eggs one at a time, beating after each',
		'Gradually beat in flour mixture',
		'Stir in chocolate chips',
		'Place on ungreased baking sheets and bake until golden brown (approximately 9 minutes)'
	],
	estimatedCount: 50,
	source: RecipeSource.GrandmaCarol,
	isComplete: true
};
