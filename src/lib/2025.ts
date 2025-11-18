import {
	ChocolateEdgedChocolateChipCookies,
	ChocolateChipCookies,
	DoubleChocolateChewies,
	LemonIcedCookies,
	MaltedMilkChocolateCookies,
	PeanutButterCookies,
	MintMeringueWreaths,
	CinnamonSugarPalmiers,
	CrinkleCookies,
	PistachioCranberryBiscotti,
	Kolacky,
	SwedishThumbprintCookies,
	Kringles,
	SpritzCookies,
	CreamWafers,
	ChewyMolassesSpiceCookies,
	ShortbreadCookies,
	SugarCookies,
	SnickerdoodleCookies,
	MeringueStars,
	CandyCaneCookies,
	RudolphCookies,
	MonsterCookies,
	type Recipe,
	PeanutButterBlossomCookies
} from './recipes';

export type Menu = {
	[key in
		| '1'
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		| '10'
		| '11'
		| '12'
		| '13'
		| '14'
		| '15'
		| '16'
		| '17'
		| '18'
		| '19'
		| '20'
		| '21'
		| '22'
		| '23'
		| '24']: Recipe;
} & {
	[key: string]: Recipe;
};

export const menu: Menu = {
	'1': ChocolateChipCookies,
	'2': DoubleChocolateChewies,
	'3': LemonIcedCookies,
	'4': MaltedMilkChocolateCookies,
	'5': ChocolateEdgedChocolateChipCookies,
	'6': PeanutButterCookies,
	'7': MintMeringueWreaths,
	'8': CinnamonSugarPalmiers,
	'9': CrinkleCookies,
	'10': PistachioCranberryBiscotti,
	'11': Kolacky,
	'12': SwedishThumbprintCookies,
	'13': Kringles,
	'14': SpritzCookies,
	'15': CreamWafers,
	'16': ChewyMolassesSpiceCookies,
	'17': ShortbreadCookies,
	'18': SugarCookies,
	'19': PeanutButterBlossomCookies,
	'20': SnickerdoodleCookies,
	'21': MeringueStars,
	'22': MonsterCookies,
	'23': CandyCaneCookies,
	'24': RudolphCookies
};
