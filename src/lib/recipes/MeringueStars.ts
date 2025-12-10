import { Sources, type Recipe } from './types';

export const MeringueStars: Recipe = {
	title: 'Meringue Stars',
	ingredients: [
		{
			type: 'countable',
			value: 'room temperature egg whites',
			quantity: 5
		},
		{
			type: 'volume',
			value: 'salt',
			milliliters: 1
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 250
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 5
		},
		{
			type: 'volume',
			value: 'almond extract',
			milliliters: 2.5
		},
		{
			type: 'countable',
			value: 'can of edible glitter spray',
			quantity: 1
		}
	],
	instructions: [
		'Preheat the oven to 225° F.',
		'On high, beat the egg whites and salt until foamy. Gradually beat in the sugar, then beat until the meringue hold stiff (approximately 3 minutes). Finally beat in the vanilla and almond extracts until combined.',
		'Pipe the meringue via a pastry bag onto sheets lined with aluminum foil, then spray with edible glitter and sprinkle with sugar.',
		'Bake for 30 minutes, then turn off the oven without opening the door and leave overnight.'
	],
	estimatedCount: 130,
	source: {
		value: Sources.CookieAdventBook,
		isModified: true
	},
	isPublished: true
};
