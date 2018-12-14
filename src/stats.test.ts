import { All, Pokemon } from './pokedex';
import { getStat, HP, SpecialAttack } from './stats';

test('HP Stat', () => {
	const chansey = All.find(
		({ nationalNumber }) => nationalNumber === 113,
	) as Pokemon;
	const stat = HP;
	const baseStat = chansey.stats[stat];

	expect(getStat({ stat, baseStat, level: 100 })).toBe(610);
	expect(getStat({ stat, baseStat, individualValue: 31, level: 100 })).toBe(
		641,
	);
	expect(
		getStat({
			awakeningValue: 200,
			baseStat,
			individualValue: 31,
			level: 100,
			stat,
		}),
	).toBe(841);

	expect(getStat({ stat, baseStat, level: 50 })).toBe(310);
	expect(getStat({ stat, baseStat, individualValue: 31, level: 50 })).toBe(325);
	expect(
		getStat({
			awakeningValue: 200,
			baseStat,
			individualValue: 31,
			level: 50,
			stat,
		}),
	).toBe(525);
});

test('Special Attack Stat', () => {
	const mewtwo = All.find(
		({ nationalNumber }) => nationalNumber === 150,
	) as Pokemon;
	const stat = SpecialAttack;
	const baseStat = mewtwo.stats[stat];

	expect(
		getStat({
			baseStat,
			level: 100,
			nature: 0.9,
			stat,
		}),
	).toBe(281);
	expect(
		getStat({
			baseStat,
			happiness: 255,
			individualValue: 31,
			level: 100,
			nature: 0.9,
			stat,
		}),
	).toBe(340);
	expect(
		getStat({
			awakeningValue: 200,
			baseStat,
			happiness: 255,
			individualValue: 31,
			level: 100,
			nature: 0.9,
			stat,
		}),
	).toBe(540);

	expect(
		getStat({
			awakeningValue: 200,
			baseStat,
			happiness: 255,
			individualValue: 31,
			level: 100,
			nature: 1.1,
			stat,
		}),
	).toBe(616);
});
