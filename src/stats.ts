export const HP = 0;
export const Attack = 1;
export const Defense = 2;
export const SpecialAttack = 3;
export const SpecialDefense = 4;
export const Speed = 5;

export type Stat =
	| typeof HP
	| typeof Attack
	| typeof Defense
	| typeof SpecialAttack
	| typeof SpecialDefense
	| typeof Speed;

export const All: ReadonlyArray<Stat> = [
	HP,
	Attack,
	Defense,
	SpecialAttack,
	SpecialDefense,
	Speed,
];

const getHappinessBoost = (happiness: number) =>
	Math.min(1.1, 1 + Math.floor(happiness / 255) * 0.1);

const DEFAULT_AWAKENING_VALUE = 0;
const DEFAULT_EFFORT_VALUE = 0;
const DEFAULT_HAPPINESS = 0;
const DEFAULT_INDIVIDUAL_VALUE = 0;

type GetStatOptions = {
	awakeningValue?: number;
	baseStat: number;
	effortValue?: number;
	individualValue?: number;
	level: number;
} & (
	| {
			stat: typeof HP;
	  }
	| {
			happiness?: number;
			nature: number;
			stat: Exclude<Stat, typeof HP>;
	  });

export const getStat = (options: GetStatOptions) => {
	let result = 0;
	if (options.stat === HP) {
		result =
			(((options.individualValue || DEFAULT_INDIVIDUAL_VALUE) +
				2 * options.baseStat +
				(options.effortValue || DEFAULT_EFFORT_VALUE) / 4) *
				options.level) /
				100 +
			10 +
			options.level;
	} else {
		const happinessBoost = getHappinessBoost(
			options.happiness || DEFAULT_HAPPINESS,
		);
		result =
			((((options.individualValue || DEFAULT_INDIVIDUAL_VALUE) +
				2 * options.baseStat +
				(options.effortValue || DEFAULT_EFFORT_VALUE) / 4) *
				options.level) /
				100 +
				5) *
			options.nature *
			happinessBoost;
	}

	return (
		Math.floor(result) + (options.awakeningValue || DEFAULT_AWAKENING_VALUE)
	);
};
