import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { AllMenus } from '$lib/menus';
import type { Recipe } from '$lib/recipes/types';

export const load: PageLoad = ({ params }) => {
	const recipe: Recipe = AllMenus[2025][params.slug];
	if (!recipe) {
		error(404, 'Not found');
	}
	return {
		day: params.slug,
		...recipe
	};
};
