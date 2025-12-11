import { Sources, type Recipe } from './types';

export const SwedishThumbprintCookies: Recipe = {
	title: 'Swedish Thumbprint Cookies',
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
			type: 'mass',
			value: 'salt',
			grams: 1.5
		},
		{
			type: 'countable',
			value: 'egg yolks',
			quantity: 2
		},
		{
			type: 'countable',
			value: 'egg white',
			quantity: 1
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 5
		},
		{
			type: 'mass',
			value: 'all-purpose flour',
			grams: 280
		},
		{
			type: 'mass',
			value: 'finely chopped almonds',
			grams: 100
		},
		{
			type: 'mass',
			value: 'lingonberry jam',
			grams: 100
		},
	],
	instructions: [
		'Preheat oven to 350° F',
		'On medium, beat together the butter and sugar until light (approximately 2-3 minutes) followed by the egg yolks, vanilla, and salt. Then gradually beat in the flour until mixed into a stiff dough.',
		'Roll the dough into balls, dip into the egg white, then coat with the almonds.',
		'Make a thumbprint in the center of each cookie and fill with jam.',
		'Bake for approximately 15 minutes until golden brown'
	],
	estimatedCount: 30,
	source: {
		value: Sources.CookieAdventBook,
		isModified: true
	},
	isPublished: true
};
