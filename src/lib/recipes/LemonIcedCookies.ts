import type { Recipe } from './types';

// c.a.b
export const LemonIcedCookies: Recipe = {
	title: 'Lemon Iced Cookies',
	ingredients: [
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 420
		},
		// TODO: 1/2 tsp baking soda to mass
		// TODO: 1/2 tsp salt to mass
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
		}
		// TODO: optional jelly bean garnish?
	],
	instructions: [
		'Preheat the oven to 375°F',
		'Whisk together flour, baking soda, and salt',
		'Beat the butter and sugar on medium for about 2 minutes until light',
		'Beat in the egg and lemon juice',
		'Gradually beat in the flour on low. Stop once mixed and the dough is smooth but slightly stiff.',
		'Portion dough onto baking sheets and flatten tops with a greased glass',
		'Bake for approximately 10 minutes until firm and golden brown',
		'Rest cookies before icing',
		'Make the icing by sifting the powdered sugar and whisking in lemon juice until smooth',
		'Spread icing over each cookie and let the icing dry'
	],
	estimatedCount: 34
};
