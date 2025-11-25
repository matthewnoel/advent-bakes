import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { menu } from '$lib/2025';
import type { Recipe } from '$lib/recipes/types';

export const load: PageLoad = ({ params }) => {
	const recipe: Recipe = menu[params.slug];
	if (!recipe) {
		error(404, 'Not found');
	}
	return {
		day: params.slug,
		...recipe
	};
};
