import { Sources, type Recipe } from './types';

// c.a.b
export const LemonIcedCookies: Recipe = {
	title: 'Lemon Iced Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 420
		},
		{
			type: 'mass',
			value: 'baking soda',
			grams: 3
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 3
		},
		{
			type: 'mass',
			value: 'room temp unsalted butter',
			grams: 110
		},
		{
			type: 'mass',
			value: 'granulated sugar',
			grams: 150
		},
		{
			type: 'countable',
			value: 'egg',
			quantity: 1
		},
		{
			type: 'volume',
			value: 'fresh lemon juice',
			milliliters: 50
		},
		// started with 332g of lemon juice
		{
			type: 'countable',
			value: 'zest of a lemon',
			quantity: 2
		}
	],
	instructions: [
		// TODO: the lemon juice here is used in two different steps. Seems odd to say 'use N% of the juice', so figure out some interpolation
		'Preheat the oven to 375°F',
		'Whisk together flour, baking soda, and salt',
		'Beat the butter, sugar, and lemon zest on medium for about 2 minutes until light',
		'Beat in the egg and half of the lemon juice',
		'Gradually beat in the flour on low. Stop once mixed and the dough is smooth but slightly stiff.',
		'Portion dough onto baking sheets and flatten tops with a greased glass',
		'Bake for approximately 10 minutes until firm and golden brown',
		'Rest cookies before icing',
		'Make the icing by sifting the powdered sugar and whisking in the rest of the lemon juice until smooth',
		'Spread icing over each cookie and let the icing dry'
	],
	estimatedCount: 34,
	source: {
		value: Sources.CookieAdventBook,
		isModified: true
	},
	isComplete: true
};
