export type Recipe = {
	title: string;
	ingredients: Ingredient[];
	instructions: string[];
	estimatedCount: number;
};

export type Mass = {
	type: 'mass';
	value: string;
	grams: number;
};

export type Volume = {
	type: 'volume';
	value: string;
	milliliters: number;
};

export type Countable = {
	type: 'countable';
	value: string;
	quantity: number;
};

export type Ingredient = Mass | Volume | Countable;

export const ChocolateEdgedChocolateChipCookies: Recipe = {
	title: 'Chocolate-Edged Chocolate Chip Cookies',
	ingredients: [
		{
			type: 'countable',
			value: 'egg',
			quantity: 1
		},
		{
			type: 'mass',
			value: 'sugar',
			grams: 25
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 15
		}
	],
	instructions: [
		'Lorem ipsum',
		'Dolor sit amet',
		'Consectetur adipiscing elit',
		'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		'Ut enim ad minim veniam'
	],
	estimatedCount: 32
};

export const ChocolateChipCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const DoubleChocolateChewies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const LemonIcedCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MaltedMilkChocolateCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const PeanutButterCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MintMeringueWreaths: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CinnamonSugarPalmiers: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CrinkleCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const PistachioCranberryBiscotti: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const Kolacky: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SwedishThumbprintCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const Kringles: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SpritzCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CreamWafers: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const ChewyMolassesSpiceCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const ShortbreadCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SugarCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const KissCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SnickerdoodleCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MeringueStars: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CandyCaneCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const RudolphCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MonsterCookies: Recipe = {
	title: '',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};
