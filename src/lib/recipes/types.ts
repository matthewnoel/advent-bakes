export type Recipe = {
	title: string;
	ingredients: Ingredient[];
	instructions: string[];
	estimatedCount: number;
	source?: string;
	isComplete?: boolean;
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
