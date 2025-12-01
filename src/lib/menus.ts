import type { Recipe } from './recipes/types';
import { ChocolateEdgedChocolateChipCookies } from './recipes/ChocolateEdgedChocolateChipCookies';
import { ChocolateChipCookies } from './recipes/ChocolateChipCookies';
import { DoubleChocolateChewies } from './recipes/DoubleChocolateChewies';
import { LemonIcedCookies } from './recipes/LemonIcedCookies';
import { MaltedMilkChocolateCookies } from './recipes/MaltedMilkChocolateCookies';
import { PeanutButterCookies } from './recipes/PeanutButterCookies';
import { MintMeringueWreaths } from './recipes/MintMeringueWreaths';
import { CinnamonSugarPalmiers } from './recipes/CinnamonSugarPalmiers';
import { CrinkleCookies } from './recipes/CrinkleCookies';
import { PistachioCranberryBiscotti } from './recipes/PistachioCranberryBiscotti';
import { Kolacky } from './recipes/Kolacky';
import { SwedishThumbprintCookies } from './recipes/SwedishThumbprintCookies';
import { Kringles } from './recipes/Kringles';
import { SpritzCookies } from './recipes/SpritzCookies';
import { CreamWafers } from './recipes/CreamWafers';
import { ChewyMolassesSpiceCookies } from './recipes/ChewyMolassesSpiceCookies';
import { ShortbreadCookies } from './recipes/ShortbreadCookies';
import { SugarCookies } from './recipes/SugarCookies';
import { SnickerdoodleCookies } from './recipes/SnickerdoodleCookies';
import { MeringueStars } from './recipes/MeringueStars';
import { CandyCaneCookies } from './recipes/CandyCaneCookies';
import { RudolphCookies } from './recipes/RudolphCookies';
import { MonsterCookies } from './recipes/MonsterCookies';
import { PeanutButterBlossomCookies } from './recipes/PeanutButterBlossomCookies';

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

const Menu2025: Menu = {
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

export const AllMenus: Record<number, Menu> = {
	2025: Menu2025
};
