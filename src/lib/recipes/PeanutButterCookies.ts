import { Sources, type Recipe } from './types';

export const PeanutButterCookies: Recipe = {
	title: 'Peanut Butter Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'Crisco (shortening)',
			grams: 190
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 230
		},
		{
			type: 'mass',
			value: 'brown sugar',
			grams: 180
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 5
		},
		{
			type: 'countable',
			value: 'eggs',
			quantity: 1
		},
		{
			type: 'mass',
			value: 'peanut butter',
			grams: 370
		},
		{
			type: 'mass',
			value: 'all-purpose flour',
			grams: 430
		},
		{
			type: 'volume',
			value: 'baking soda',
			milliliters: 10
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 1
		}
	],
	instructions: [
		'Preheat oven to 375° F.',
		'In a mixer cream the shortening, sugars, and vanilla.',
		'Next beat in the eggs.',
		'Stir in the peanut butter followed by the dry ingredients.',
		'Form into balls and place on an ungreased baking sheet. Then press the balls with a fork twice to make a crisscross pattern.',
		'Bake for approximately 10 minutes'
	],
	estimatedCount: 64,
	source: {
		value: Sources.GrandmaCarol
	},
	isComplete: true
};
