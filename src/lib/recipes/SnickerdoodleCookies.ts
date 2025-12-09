import { Sources, type Recipe } from './types';

export const SnickerdoodleCookies: Recipe = {
	title: 'Snickerdoodle Cookies',
	ingredients: [
		{
			type: 'countable',
			value: 'Crisco bar (shortening)',
			quantity: 1
		},
		// 1.5 cup sugar
		{
			type: 'countable',
			value: 'eggs',
			quantity: 2
		}
		// 2.75 cup flour
		// 2 tsp cream of tartar
		// 1 tsp baking soda
		// .25 tsp salt
		/*
        Roll In
		2 tbsp sugar
		2 tsp cinnamon
		*/
	],
	instructions: [
		'Preheat oven to 400° F.',
		'Mix shortening, sugar, & eggs until creamy.',
		'Mix flour, cream of tartar, salt, and baking soda.',
		'Shape dough into balls and roll in cinnamon sugar.',
		'Bake on ungreased cookie sheets for 8-10 minutes.'
	],
	estimatedCount: 50,
	source: {
		value: Sources.GrandmaCarol
	}
};
