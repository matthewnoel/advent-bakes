import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { AllMenus } from '$lib/menus';
import type { Recipe } from '$lib/recipes/types';

export const load: PageLoad = ({ params }) => {
	const year = Number(params.year);
	const menu = AllMenus[year];
	if (!menu) {
		error(404, 'Year not found');
	}
	const recipe: Recipe = menu[params.slug];
	if (!recipe) {
		error(404, 'Not found');
	}
	return {
		day: params.slug,
		...recipe
	};
};
