import type { Recipe } from './types';

// c.a.b
export const PistachioCranberryBiscotti: Recipe = {
	title: 'Pistachio Cranberry Biscotti',
	ingredients: [
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 420
		},
		// TODO: 2tsp baking powder to mass
		// TODO: 1/2 tsp salt to mass
		{
			type: 'mass',
			value: 'sugar',
			grams: 200
		},
		{
			type: 'countable',
			value: 'eggs',
			quantity: 3
		},
		{
			type: 'mass',
			value: 'melted and slightly cooled unsalted butter',
			grams: 55
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 5
		},
		{
			type: 'volume',
			value: 'orange extract',
			milliliters: 2.5
		},
		{
			type: 'mass',
			value: 'coarsely chopped unsalted pistachios',
			grams: 120
		},
		{
			type: 'mass',
			value: 'coarsely chopped dried cranberries',
			grams: 140
		}
	],
	instructions: [
		'Preheat oven to 350F',
		'Whisk together flour, baking powder, and salt',
		'Beat together sugar and eggs on high for about 2 minutes until pale yellow',
		'Switch to medium and beat in butter, vanilla, and orange extract',
		'Switch to low and gradually beat in flour until mixed and the dough is medium stiff',
		'Stir in pistachios and cranberries',
		'With wet our floured hands, shape the dough into two logs approximately 12in by 3in',
		'Cover logs in plastic wrap and refigerate for approximately 20 minues until firm',
		'Line your baking sheet with parchment paper and par bake for approximately 30 minutes until lightly brown and nearly firm',
		'Let cool for 30 minutes then slice the logs approximately every half inch',
		'Lower the oven to 325F and place the slices on a baking sheet with fresh parchment paper',
		'Bake for approximately 20 minutes until pale gold, then let cool on the baking sheet'
	],
	estimatedCount: 40
};
