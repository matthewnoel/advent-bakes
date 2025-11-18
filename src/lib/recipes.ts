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
	title: 'Chocolate Chip Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const DoubleChocolateChewies: Recipe = {
	title: 'Double Chocolate Chewies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const LemonIcedCookies: Recipe = {
	title: 'Lemon Iced Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MaltedMilkChocolateCookies: Recipe = {
	title: 'Malted Milk Chocolate Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const PeanutButterCookies: Recipe = {
	title: 'Peanut Butter Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MintMeringueWreaths: Recipe = {
	title: 'Mint Meringue Wreaths',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CinnamonSugarPalmiers: Recipe = {
	title: 'Cinnamon Sugar Palmiers',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CrinkleCookies: Recipe = {
	title: 'Crinkle Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const PistachioCranberryBiscotti: Recipe = {
	title: 'Pistachio Cranberry Biscotti',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const Kolacky: Recipe = {
	title: 'Kolacky',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SwedishThumbprintCookies: Recipe = {
	title: 'Swedish Thumbprint Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const Kringles: Recipe = {
	title: 'Kringles',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SpritzCookies: Recipe = {
	title: 'Spritz Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CreamWafers: Recipe = {
	title: 'Cream Wafers',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const ChewyMolassesSpiceCookies: Recipe = {
	title: 'Chewy Molasses Spice Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const ShortbreadCookies: Recipe = {
	title: 'Shortbread Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SugarCookies: Recipe = {
	title: 'Sugar Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const PeanutButterBlossomCookies: Recipe = {
	title: 'Peanut Butter Blossom Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const SnickerdoodleCookies: Recipe = {
	title: 'Snickerdoodle Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MeringueStars: Recipe = {
	title: 'Meringue Stars',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const CandyCaneCookies: Recipe = {
	title: 'Candy Cane Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const RudolphCookies: Recipe = {
	title: 'Rudolph Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};

export const MonsterCookies: Recipe = {
	title: 'Monster Cookies',
	ingredients: [],
	instructions: [],
	estimatedCount: 0
};
