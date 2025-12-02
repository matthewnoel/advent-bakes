import { Sources, type Recipe } from './types';

export const DoubleChocolateChewies: Recipe = {
	title: 'Double Chocolate Chewies',
	ingredients: [
		{
			type: 'mass',
			value: 'powdered sugar',
			grams: 240
		},
		{
			type: 'mass',
			value: 'unsweetened cocoa powder',
			grams: 60
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 1
		},
		{
			type: 'countable',
			value: 'egg whites',
			quantity: 4
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 6
		},
		{
			type: 'mass',
			value: 'semisweet chocolate chips',
			grams: 180
		}
	],
	instructions: [
		'Preheat oven to 350°F',
		'Sift together the powdered sugar, cocoa powder, and salt',
		'Beat egg whites one at a time into the sugar mixture on high. Beat for about 4 minutes until there is a brownie-like dough. If the dough does not stiffen while mixing, cover and freeze for 20 minutes.',
		'Beat in the vanilla',
		'Stir in the chocolate chips',
		'Line your baking sheets with parchment paper and portion the dough on them',
		'Bake for 10-12 minutes until the tops are barely firm to the touch and have not begun to darken'
	],
	estimatedCount: 50,
	source: { value: Sources.CookieAdventBook, isModified: true },
	isComplete: true
};
