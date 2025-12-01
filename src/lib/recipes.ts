export type Recipe = {
	title: string;
	ingredients: Ingredient[];
	instructions: string[];
	estimatedCount: number;
	source?: string;
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

export type Ingredient = Mass | Volume | Countable; // TODO: should ingredients have an optional recommendation string? E.g. fine salt when it needs to be sifted

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
	ingredients: [
		{
			type: 'mass',
			value: 'all purpose flour',
			grams: 360
		},
		{
			type: 'mass',
			value: 'baking soda',
			grams: 5
		},
		{
			type: 'mass',
			value: 'salt',
			grams: 5
		},
		{
			type: 'mass',
			value: 'softened butter',
			grams: 228
		},
		{
			type: 'mass',
			value: 'semi-sweet chocolate chips',
			grams: 340
		},
		{
			type: 'mass',
			value: 'granulated sugar',
			grams: 170
		},
		// TODO: brown sugar
		{
			type: 'countable',
			value: 'eggs',
			quantity: 2
		}
	],
	instructions: [
		'Preheat hoven to 375F',
		'Combine flour, baking soda, and salt in a bowl',
		'Beat butter, granulated sugar, brown sugar, and vanilla extract in a mixer until creamy',
		'Add eggs one at a time, beating after each',
		'Gradually beat in flour mixture',
		'Stir in chocolate chips',
		'Place on ungreased baking sheets and bake until golden brown (approximately 9 to 11 minutes)'
	],
	estimatedCount: 60,
	source: 'Carol'
};

// modified from c.a.b
export const DoubleChocolateChewies: Recipe = {
	title: 'Double Chocolate Chewies',
	ingredients: [
		{
			type: 'mass',
			value: 'powdered sugar',
			grams: 240
		},
		{
			type: 'mass',
			value: 'unsweetened cocoa powder',
			grams: 60
		},
		// TODO: 1/4 tsp salt to mass
		{
			type: 'countable',
			value: 'egg whites',
			quantity: 4
		},
		{
			type: 'volume',
			value: 'vanilla extract',
			milliliters: 6
		},
		{
			type: 'mass',
			value: 'semisweet chocolate chips',
			grams: 180
		}
	],
	instructions: [
		'Preheat oven to 350F',
		'Sift together the powdered sugar, cocoa powder, and salt',
		'Beat egg whites one at a time into the sugar mixture on high. Beat for about 4 minutes until there is a soft dough',
		'Beat in the vanilla',
		'Stir in the chocolate chips',
		'Line your baking sheets with parchment paper and portion the dough on them',
		'Bake for 10-12 minutes until the tops are barely firm to the touch and have not begun to darken'
	],
	estimatedCount: 32
};

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
		'Preheat the oven to 375F',
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
