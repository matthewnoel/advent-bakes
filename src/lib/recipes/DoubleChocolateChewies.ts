import type { Recipe } from './types';

// modified from c.a.b
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
		// TODO: 1/4 tsp salt to mass
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
		'Preheat oven to 350F',
		'Sift together the powdered sugar, cocoa powder, and salt',
		'Beat egg whites one at a time into the sugar mixture on high. Beat for about 4 minutes until there is a soft dough',
		'Beat in the vanilla',
		'Stir in the chocolate chips',
		'Line your baking sheets with parchment paper and portion the dough on them',
		'Bake for 10-12 minutes until the tops are barely firm to the touch and have not begun to darken'
	],
	estimatedCount: 32
};
