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
	instructions: [
		'Preheat oven to 350° F',
		'On medium, beat together the butter and sugar until light (approximately 2-3 minutes) followed by the egg, vanilla, malted milk powder, and salt. Then, on low, gradually beat in the flour until mixed into a stiff dough.',
		'Roll the dough into balls and bake until set (approximately 12 minutes) then let rest for 2 minutes before transferring to wire racks to cool.',
		'Melt chocolate and stir in vegetable oil to create the coating',
		'Dip each cookie to cover the top and temporarily refrigerate to aid the hardening process if necessary'
	],
	estimatedCount: 30,
	source: {
		value: Sources.CookieAdventBook,
		isModified: true
	},
	isComplete: true
};
