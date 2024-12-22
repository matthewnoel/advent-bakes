import { ChocolateEdgedChocolateChipCookies, type Recipe } from './recipes';

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
	'1': ChocolateEdgedChocolateChipCookies,
	'2': ChocolateEdgedChocolateChipCookies,
	'3': ChocolateEdgedChocolateChipCookies,
	'4': ChocolateEdgedChocolateChipCookies,
	'5': ChocolateEdgedChocolateChipCookies,
	'6': ChocolateEdgedChocolateChipCookies,
	'7': ChocolateEdgedChocolateChipCookies,
	'8': ChocolateEdgedChocolateChipCookies,
	'9': ChocolateEdgedChocolateChipCookies,
	'10': ChocolateEdgedChocolateChipCookies,
	'11': ChocolateEdgedChocolateChipCookies,
	'12': ChocolateEdgedChocolateChipCookies,
	'13': ChocolateEdgedChocolateChipCookies,
	'14': ChocolateEdgedChocolateChipCookies,
	'15': ChocolateEdgedChocolateChipCookies,
	'16': ChocolateEdgedChocolateChipCookies,
	'17': ChocolateEdgedChocolateChipCookies,
	'18': ChocolateEdgedChocolateChipCookies,
	'19': ChocolateEdgedChocolateChipCookies,
	'20': ChocolateEdgedChocolateChipCookies,
	'21': ChocolateEdgedChocolateChipCookies,
	'22': ChocolateEdgedChocolateChipCookies,
	'23': ChocolateEdgedChocolateChipCookies,
	'24': ChocolateEdgedChocolateChipCookies
};
