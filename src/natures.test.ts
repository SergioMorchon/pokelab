import { All as AllLanguages, English, Spanish } from './languages';
import {
	Adamant,
	All as AllNatures,
	findNature,
	getName,
	Modest,
} from './natures';
import { Attack, SpecialAttack } from './stats';

test('Find nature', () => {
	expect(findNature(Attack, SpecialAttack)).toBe(Adamant);
	expect(findNature(SpecialAttack, Attack)).toBe(Modest);
	expect(findNature(SpecialAttack, Attack)).toBe(Modest);
});

test('Get name', () => {
	expect(getName(Modest, English)).toBe('Modest');
	expect(getName(Modest, Spanish)).toBe('Modesta');
});

test('All natures are named for every language', () => {
	for (const language of AllLanguages) {
		for (const nature of AllNatures) {
			expect(getName(nature, language)).toBeTruthy();
		}
	}
});
