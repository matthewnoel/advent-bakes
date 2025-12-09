import { Sources, type Recipe } from './types';

export const CrinkleCookies: Recipe = {
	title: 'Crinkle Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'unsweetened baking chocolate',
			grams: 115
		},
		{
			type: 'mass',
			value: 'unsalted butter',
			grams: 55
		},
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 280
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 400
		},
		{
			type: 'countable',
			value: 'eggs',
			quantity: 4
		},
		{
			type: 'mass',
			value: 'baking powder',
			grams: 7
		},
		{
			type: 'volume',
			value: 'ground cinnamon',
			milliliters: 1
		},
		{
			type: 'mass',
			value: 'sifted powdered sugar',
			grams: 125
		}
	],
	instructions: [
		'Chop chocolate and chunk butter. Melt chocolate and butter together then let cool.',
		'Combine cooled chocolate mixture, half of the flour, granulated sugar, and eggs then beat together on medium until combined (approximately 2 minutes).',
		'On low, beat in the rest of the flour.',
		'Cover in plastic wrap and refrigerate for 2 to 4 hours.',
		'Preheat oven to 350° F.',
		'Roll dough into balls, roll the balls in powdered sugar, then place on lightly greased cookie sheets.',
		'Bake until tops are firm and cracked (approximately 12 to 15 minutes) then let cool on cookie sheets for 2 minutes before fully cooling on racks.'
	],
	estimatedCount: 42,
	source: {
		value: Sources.CookieAdventBook,
		isModified: true
	},
	isPublished: true
};
